/* 
描述
给定一个字符串（ 以字符数组的形式给出） 和一个偏移量， 根据偏移量原地旋转字符串(从左向右旋转)。

说明
原地旋转意味着你要在s本身进行修改。 你不需要返回任何东西。

样例
样例 1:

  输入: str = "abcdefg", offset = 3
输出: str = "efgabcd"
样例解释: 注意是原地旋转， 即str旋转后为 "efgabcd"
样例 2:

  输入: str = "abcdefg", offset = 0
输出: str = "abcdefg"
样例解释: 注意是原地旋转， 即str旋转后为 "abcdefg"
样例 3:

  输入: str = "abcdefg", offset = 1
输出: str = "gabcdef"
样例解释: 注意是原地旋转， 即str旋转后为 "gabcdef"
样例 4:

  输入: str = "abcdefg", offset = 2
输出: str = "fgabcde"
样例解释: 注意是原地旋转， 即str旋转后为 "fgabcde"
样例 5:

  输入: str = "abcdefg", offset = 10
输出: str = "efgabcd"
样例解释: 注意是原地旋转， 即str旋转后为 "efgabcd"

*/
const rotateString = function(str, offset){
  if(offset == 0){
    return str
  }else if(offset > str.length){
    offset = offset - str.length
  }
  str = str.substring(str.length - offset) + str.substring(0, str.length - offset)
  return str
}
console.log(rotateString("abcdefg", 0));
