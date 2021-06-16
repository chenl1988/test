/* 使用 Object.prototype.toString 配合闭包，通过传入不同的判断类型来返回不同的判断函数，
（注意传入 type 参数时首字母大写） */
let isType = function (type) {
  return function (target) {
    return `[object ${type}]` === Object.prototype.toString.call(target);
  }
}

let isArray = isType('Array')([]);
console.log(isArray);

/* 一行代码，简洁优雅灵活 */
const isType_2 = type => target => `[object ${type}]` === Object.prototype.toString.call(target);

const isArray_2 = isType_2('Array');
console.log(isArray_2([]), "_2");

/* 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为 call 会将第一个参数进行装箱操作 */