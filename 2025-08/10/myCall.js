function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };
// greet.call(person, 'Hello'); // 输出: "Hello, Alice"


// 函数原型 增加myCall
Function.prototype.myCall = function(context, ...args) {
  // 判断是否传入对象，如果没 则然使用全局对象 node为 global  浏览器为 window
  if (!context) {
    context = typeof window === 'undefined' ? global : window;
  }
  // 想办法绑定this 和调用 借用一个唯一变量做中间转化
  const fn = Symbol('fn');
  // 这步是核心 让入参的对象内增加一个方法 然后调用这个方法 就可以模拟this绑定
  context[fn] = this;
  // 调用
  context[fn](...args);
  // 删除
  delete context[fn];
  // 返回结果
  return context;
}
greet.myCall(person, 'Hello');