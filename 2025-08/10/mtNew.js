function myNew (fn, ...args){
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj, args)
    return res instanceof Object ? res : obj
}
function A() { return [1,2,3]; }
function B() { return function() {}; }

const a = myNew(A); // 返回 [1,2,3]
const b = myNew(B); // 返回函数