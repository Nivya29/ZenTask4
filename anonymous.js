// 1. Print Odd Numbers
const oddNumbers = function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
          oddArr.push(arr[i]);
      }
  }
  return oddArr;
};
const result = oddNumbers();
console.log(result);


//2. Convert Sting to title caps
var titleCase = function(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(titleCase("hello world"));


//3. Sum of all numbers in an array
var sumNumbers = function(arr){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    sum=0;
    for(i=0;i<arr.length;i++){
    sum+=arr[i];
    }
    console.log(sum);
}
sumNumbers();



//4. Prime Numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
const primeNumber = arr.filter(function(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
});
console.log(primeNumber); 



//5.Palindromes
const arrys = [123,321,5005,6006,3003,1771,1661,567,1331];
const palindromes = arrys.filter(function (num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
});
console.log(palindromes);



//6.Median of two sorted arrays
var arr1= [1,2,3];
var arr2=[4,5,6];
function compare(a, b) {
  return a - b;
}
const median = function(num1, num2) {
   const merge = num1.concat(num2);
   const sortedArray = merge.sort(compare);

   const length = sortedArray.length;
   const middle = Math.floor(length / 2);

   if (length % 2 === 0) {
   
     return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
   } else {
   
      return sortedArray[middle];
  }
 };
const med = median(arr1, arr2);
console.log(med); 



//7.Remove duplicates from array
var arry = [1, 2, 2, 7, 4, 4, 5];
var removeDuplicates = function(arr){
  const newSet = new Set(arr);
  const newArr = [...newSet];
  return newArr;
}
console.log(removeDuplicates(arry));


//8.Rotate array by K times
var arrs = [1, 2, 3, 4, 5, 6];
var k = 2;
const rotateArray = function(arry, k) {
  for (let i = 0; i < k; i++) {
    arry.unshift(arry.pop());
  }
  return arry;
};
const rotatedArray = rotateArray(arrs, k);
console.log(rotatedArray);
