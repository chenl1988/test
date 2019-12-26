/* 是否包含某个值 */
/* 
array.indexOf：
  此方法判断数组中是否存在某个值，如果存在，
  则返回数组元素的下标，否则返回-1
*/
var arr = [1,2,3,4];
var index = arr.indexOf(3);
console.log(index);

/* 
  array.includes：
    此方法判断数组是否存在某个值，如果存在就返回true，否则返回false
*/
var arr1 = [1,2,3,4];
var flag = arr1.includes(3);
console.log(flag);

/* 
  array.find(callback[,thisArg])
    此方法返回数组中满足条件的第一个元素的值，如果没有，返回undefined
*/
var arr2 = [1,2,3,4];
var res = arr2.find(item=>{
  return item>2;
});
console.log(res);

/* 
  array.findIndex(callback[,thisArg]);
    此方法返回数组中满足的第一个元素的下标，如果没有找到，返回-1
*/
var arr3 = [1,2,3,4];
var resIndex = arr3.findIndex(item=>{
  return item>2;
})
console.log(resIndex);