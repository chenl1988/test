const arr = [4, 6, -3, 1, 10, 5];
const max = Math.max(...arr);
console.log(max);

/* 
  剩余参数 ,剩余参数语法和展开语法看起来是一样的，不同的是展开语法是为了解构数组和对象；而剩余参数和展开运算符是相反的，剩余参数收集多个元素合成一个数组
*/

function myFunc(...args) {
  console.log(args[0] + args[1]);
}
myFunc(1, 2, 3, 4);