const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);
console.log(found);
/* 
  再次注意，虽然5之后的所有元素都符合条件，但是只返回第一个匹配的元素
  当你发现匹配项时，通常会中断for循环，在这种情况下，这实际上非常有用
*/