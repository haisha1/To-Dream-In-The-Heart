/**
 * 自定义实现 Function.prototype.bind 方法
 * @param {Object} context - 要绑定的this值，非对象类型会被转换为对象，null/undefined会替换为全局对象
 * @param {Array} [args=[]] - 预设参数数组（可选）
 * @returns {Function} - 返回一个新的绑定函数
 */
Function.prototype.myBind = function(context, args = []) {
  // 1. 处理context为null或undefined的情况
  // 判断环境：Node.js(global)或浏览器(window)
  if (context == null) {
    context = typeof window === 'undefined' ? global : window;
  }
  
  // 2. 确保context是对象（原始值会被包装）
  context = Object(context);
  
  // 3. 保存原函数引用
  const originalFunc = this;
  
  // 4. 创建并返回绑定函数
  return function(...args2) {
    // 4.1 创建唯一属性键，避免覆盖context原有属性
    const fnKey = Symbol('boundFn');
    
    // 4.2 将原函数赋值给context的属性
    context[fnKey] = originalFunc;
    
    // 4.3 执行函数，合并预设参数和新参数
    const result = context[fnKey](...args, ...args2);
    
    // 4.4 删除临时添加的属性
    delete context[fnKey];
    
    // 4.5 返回执行结果
    return result;
  };
};


function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
  return greeting.length + this.name.length;
}

const person = { name: 'Alice' };

// 测试基本绑定
const boundGreet = greet.myBind(person, ['Hello']);
const result = boundGreet('!'); 
// 输出: "Hello, Alice!"
// 返回值: 5 (Hello) + 5 (Alice) = 10

// 测试原始值绑定
const boundToNumber = greet.myBind(123);
boundToNumber('Hi', '~'); 
// 输出: "Hi, undefined~" (因为Number对象没有name属性)

// 测试链式调用
const boundWithTwoArgs = greet.myBind(person, ['Hi']).myBind(null, ['?']);
boundWithTwoArgs(); 
// 输出: "Hi, Alice?" (第二个bind的this绑定无效，但参数合并)