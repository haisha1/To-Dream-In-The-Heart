// 1. 变量提升顺序
// console.log(a);
// var a = 1;
// console.log(a);

// 2. 函数声明 vs 函数表达式
// console.log(foo()); 
// function foo() { return 'A'; }

// console.log(bar()); 
// var bar = function() { return 'B'; };

// 3. var / let / const 提升 & TDZ
// console.log(x);
// var x = 10;

// 暂时性死区 TDZ 
// console.log(y);
// let y = 20;

// console.log(z);
// const z = 30;

// 4. 同名变量和函数的提升优先级
// 提升 function a()（比 var a 优先）
// 再提升 var a（已存在，忽略）
// console.log(a);
// function a() {}
// var a = 1;
// console.log(a);

// 5. 嵌套函数和变量提升
// test();
// function test() {
//   console.log(a);
//   var a = 1;
//   function a() {}
//   console.log(a);
// }

// 6. 函数内 let 声明的 TDZ
// function foo() {
//   console.log(x);
//   let x = 5;
// }
// foo();

