/**
 * 自定义实现 Function.prototype.apply 方法
 * @param {Object} context - 要绑定的this值，非对象类型会被转换为对象，null/undefined会替换为全局对象
 * @param {Array} args - 参数数组，如果没有参数则传递空数组或不传（但原生apply不允许不传）
 * @returns {*} - 返回函数的执行结果
 */
Function.prototype.myApply = function(context, args) {
  // 1. 处理context为null或undefined的情况
  // 判断环境：Node.js(global)或浏览器(window)
  if (context == null) {
    context = typeof window === 'undefined' ? global : window;
  }
  
  // 2. 确保context是对象（原始值会被包装）
  // 例如：传入数字123会变成Number对象
  context = Object(context);
  
  // 3. 创建唯一属性键，避免覆盖context原有属性
  // 使用Symbol保证属性名唯一性
  const fnKey = Symbol('tempFn');
  
  // 4. 将当前函数(this)赋值给context的属性
  // 这样调用时this就会指向context
  context[fnKey] = this;
  
  // 5. 执行函数并保存结果
  // 使用展开运算符传递数组参数
  const result = context[fnKey](...(args || []));
  
  // 6. 删除临时添加的属性
  // 保持context的原始状态
  delete context[fnKey];
  
  // 7. 返回函数执行结果
  return result;
};