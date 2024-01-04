//1.Print Odd Numbers

const result = (function () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
})();
console.log(result);


//2. Convert Sting to title caps
(function() {
    var titleCase = function(str) {
      str = str.toLowerCase().split(' ');
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    };
   console.log(titleCase("hello world"));
  })();


//3.Sum of all numbers in an array
 (function() {
    var titleCase = function(str) {
      str = str.toLowerCase().split(' ');
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    };
    console.log(titleCase("hello world"));
 })();

 //4.Prime Numbers in an array
 (function() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
    const primeNumbers = (function(arr) {
      return arr.filter(function(num) {
        for (let i = 2; i < num; i++)
          if (num % i === 0) return false;
        return num !== 1;
      });
    })(arr);
    console.log(primeNumbers);
  })();

 //5.Palindromes
 (function() {
    const arr = [123, 321, 5005, 6006, 3003, 1771, 1661, 567, 1331];
  
    const palindromes = (function(arr) {
      return arr.filter(function(num) {
        const str = num.toString();
        return str === str.split("").reverse().join("");
      });
    })(arr);
    console.log(palindromes);
  })();


  


  //6.Median of two sorted arrays
  const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
(function() {
  function compare(a, b) {
    return a - b;
  }
  function findMedian(arr1, arr2) {
    const merge = arr1.concat(arr2);
    const sortedArray = merge.sort(compare);
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
      return sortedArray[middle];
    }
  }
  const median = findMedian(arr1, arr2);
  console.log(median);
})();



//7.Remove duplicates from array
var arry = [1, 2, 2, 7, 4, 4, 5];
var removeDuplicates = (function(arr) {
  const newSet = new Set(arr);
  const newArr = [...newSet];
  return newArr;
})(arry);
console.log(removeDuplicates);


//8.Rotate array by K times
const arr = [1, 2, 3, 4, 5, 6];
const k = 2;
(function() {
  const rotateArray = function(arry, k) {
    for (let i = 0; i < k; i++) {
      arry.unshift(arry.pop());
    }
    return arry;
  };
  const rotatedArray = rotateArray(arr, k);
  console.log(rotatedArray);
})();



  