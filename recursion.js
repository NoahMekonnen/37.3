/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) return 1;

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 0) return 0

  if (words[0].length >= longest(words.slice(1))) return words[0].length
  else return words[1].length
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 0) return ""

  return str[0] + everyOther(str.substring(2, str.length))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length == 0) return true
  if (str.length == 1) return true
  if (isPalindrome(str.substring(1, str.length - 1)) == true) {
    if (str[0] == str[str.length - 1]) return true

    else return false
  }
  return false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // IS THIS ALLOWED? Using indexOf?
  if (arr.indexOf(val) == -1) return -1

  if (arr.length == 1 && arr[0] == val) return 1

  const mid = Math.floor(arr.length / 2)
  if (arr[mid] == val) return mid

  if (arr[mid] > val) return findIndex(arr.slice(0, mid), val)

  if (arr[mid] < val) return mid + findIndex(arr.slice(mid + 1), val)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 0) return ""

  return str[str.length - 1] + revString(str.substring(0, str.length - 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

// const arr = []
function gatherStrings(obj, arr=[]) {
  for (let key of Object.keys(obj)){
    if (typeof obj[key] == 'object'){
      gatherStrings(obj[key],arr)
    }
    else if(typeof obj[key] == 'string'){
      arr.push(obj[key])
    }

  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
