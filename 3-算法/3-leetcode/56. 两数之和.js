/* 
给一个整数数组， 找到两个数使得他们的和等于一个给定的数 target。

你需要实现的函数twoSum需要返回这两个数的下标, 并且第一个下标小于第二个下标。 注意这里下标的范围是 0 到 n - 1。

样例
样例1:
  给出 numbers = [2, 7, 11, 15], target = 9, 返回[0, 1].
样例2:
  给出 numbers = [15, 2, 7, 11], target = 9, 返回[1, 2].
*/

/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (numbers, target) {
  // write your code here
  for(let i=0;i<numbers.length;i++){
    for(let j=1;j<numbers.length;j++){
      if(numbers[i]+numbers[j] == target){
        return [i, j]
      }
    }
  }
}
console.log(twoSum([15, 2, 7, 11], 9));
