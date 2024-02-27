//1.Print Odd Numbers

const oddNumbers = () => {
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
//Output :[1, 3, 5, 7, 9]

//2.Convert Sting to title caps
const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(titleCase("hello world"));
  //Output:Hello World


//3.Sum of all numbers in an array
const sumNumbers = () => {
    const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
      sum += arry[i];
    }
    console.log(sum);
  };
  sumNumbers();
  //Output:55


  //4.Prime Numbers in an array
const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = arrs.filter(num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
});
console.log(primeNumbers);
//Output:[2, 3, 5, 7, 11, 13]

//5.Palindromes
const arr = [123, 321, 5005, 6006, 3003, 1771, 1661, 567, 1331];
const palindromes = arr.filter(num => {
  const str = num.toString();
  return str === str.split("").reverse().join("");
});
console.log(palindromes);
//Output:[5005, 6006, 3003, 1771, 1661, 1331]



