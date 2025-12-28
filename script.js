console.log("Hello js");
// // swap
// let a = 5;
// let b = 9;
// console.log(a)
// console.log(b)
// let temp ;
// temp = a;
// a= b;
// b = temp;
// console.log(a)
// console.log(b)

// let name = "shagun";
// let a = 5;
// let shagun= true;
// let U;
// console.log(typeof name);
// console.log(typeof a);
// console.log(typeof shagun);
// console.log(typeof u);

// Convert a string "50" into a number and add 10 to it.
// let num = "50";
// let result = Number(num) + 10;
// console.log(result);

// Check if a number is even or odd.

// let num = prompt("Enter the numer");
// if(num % 2 === 0){
//     console.log("The num is even");

// }else{
//     console.log("the number is odd");
// }

// Write a program that checks whether a person can vote (age ≥ 18).

// let age = prompt("Enter your age");
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
// }

// Compare two numbers and print:Greater,Smaller,Equal

// let a = prompt("Enter A");
// let b = prompt("Enter B");

// if(a>b){
//     console.log("A is greter than B");
// }else if(b>a){
//     console.log("B is greter than A");
// }else{
//     console.log("A is eque to B");
// }

// Use ternary operator to check if a number is positive or negative.

// let num = prompt("Enter the num");
// let result = num>=0? "positive":"negetive";
// console.log(result);

// Print numbers from 1 to 10 using a for loop.

// for (let index = 1; index <= 10 ;index++) {
//     console.log(index);
// }
// Print all even numbers between 1 and 50.
// for(i = 1; i<=50;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// Print the table of 5.
// let num = prompt("Enter the table num");
// for(i=1;i<=10;i++){
//     let result = i*num;
//     console.log(num,"*",i, "=" ,result );
// }

//  Find the sum of numbers from 1 to 100.
// let sum =0;
// for(i=1; i<=100; i++){
//     sum = i+sum;
// }
// console.log(sum);

// Reverse a number (example: 123 → 321).

// let num = Number(prompt("Enter the num"));
// while (num >0) {
//    let rev = num % 10;
//    console.log(rev);
//     num = Math.floor(num / 10);
// }

// Write a function that adds two numbers.

// function addnum(a,b){
//     let sum = a+b;
//     return sum;
// }
// let a = prompt("Enter A");
// let b = prompt("Enter B");

// let sum = addnum(a,b);
// console.log("The sum of two number is", sum);

// Write a function that returns the square of a number.

// function squ(a){
//     let num = a * a;
//     return num;
// }
// let a = squ(3);
// console.log(a);

// Write a function to check if a number is prime.
// function primenum(num) {
//   if (num <= 1) {
//     console.log("Not a prime number");
//     return;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       console.log("Not a prime number");
//       return;
//     }
//   }

//   console.log("Prime number");
// }

// let a = Number(prompt("Enter the number"));
// primenum(a);

// Write a function that converts Celsius to Fahrenheit.
// (0°C × 9/5) + 32 = 32°F

// function converts(a){
//   let fahre = (a*9/5) + 32;
//   return fahre;
// }
// let cel = Number(prompt("Enter the temp in Celsius"));
// console.log(converts(cel));

// Create an arrow function for multiplication.
// const mil = (b,a)=>{
//   return a*b;

// }
// console.log(mil(4,5));

// Create an array of 5 fruits.
// let fruits = ["apple", "banana", "kiwi", "pineapple","orange"];
// let myarr = [1,2,3,4,5,6];
// console.log(myarr);

// // myarr.push("Shagun");
// // console.log(myarr);

// // myarr.pop();
// // console.log(myarr);

// // myarr.unshift(9);
// // console.log(myarr);

// // myarr.shift(9);
// // console.log(myarr);

// // console.log(myarr.includes(9));
// // console.log(myarr.indexOf(9));
// // console.log(myarr.indexOf(3));

// //covernt arr to srting
// let newArr = myarr.join();
// console.log(newArr);
// console.log(typeof newArr);

// // slice,splice

// console.log("A", myarr);
// const myn1 = myarr.slice(1,3);
// console.log('a',myn1);

// console.log("B", myarr);
// const myn2 = myarr.splice(1,3);
// console.log('b',myn2);
// console.log(myarr);

// Print the first and last element.

// Add a new item to the array.

// Remove the last item from the array.

// Find the largest number in an array.

// console.log("hello js");
// //que 1
// let a = "shagun ";
// let b = 7;
// let sum = a + b;
// console.log("the sum is ", sum);

// // que2

// console.log(typeof sum);

// //que 3

// let object= {
//     name : "shagun",
//     age : 20,
// }
// console.log(object);

// //que 4
// //add a key and value to object

// object['gender'] = 'male';
// console.log(object)

// // que 5

// let age = prompt("what is your age?");
// if(age > 10 && age <20){
//     console.log("your aligebel");
// }
// else{
//     console.log("your not aligebel");
// }

//que 6

// let symbol = prompt("Enter a oprater");
// let a = Number(prompt("enter A"));
// let b = Number(prompt("enter B"));

// switch(symbol){
//     case '+':
//         console.log("The sum of this is ", a + b);
//         break;
//     case '-':
//         console.log("The sum of this is ", a - b);
//         break;
//     case '*':
//         console.log("The sum of this is ", a * b);
//         break;
//     case '/':
//         console.log("The sum of this is ", a / b);
//         break;
// }

// que 7

// age = prompt("Enter your age");
// let a = (age>18)?"you can drive":"you cannot drive";
// console.log(a)

//que 8
// let marks = {
//     shagun: 68,
//     yogesh: 79,
//     badeshahab: 99.99,
// }

// for(let key in marks){
//     console.log("The marks of " + key + "are" +marks[key]);
// }

//que 9

// let a = 2;
// let b = prompt("enter the number");

// while(b != a){
//     console.log("try agin");
//     b = prompt("enter a number agian");
// }
// console.log("you guss right");

//que 10

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// // for(i = 0; i< marks.length;i++){
// //     sum = sum + marks[i];
// // }
// // console.log("the sum is ", sum);

// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum/marks.length;
// console.log("The sum is ", sum);
// // console.log("The avg is", avg);
// console.log(`avg mark is ${avg}`);

// que 11

// let a = [250,645,300,900,50];
// for(let i = 0; i < a.length; i++){
//     console.log("The value befor offer is", a[i]);
//     let offer = a[i] /10;
//     a[i] = a[i] - offer;
//     console.log("The valur after offer is", a[i]);
// }

// que 12

// let a = 0;
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// function sum(x,y){
//     s = x+y;
//     return s;

// }
// let val = sum(4,5);
// console.log("val is " ,val)

// arrow function

// const sum = (a,b)=>{
//     console.log(a+b);
// };

// const sum1 = (x,y)=>{
//    return x*y;
// };

// let mul = sum1(4,5);
// console.log("The multiplecation is ", mul);

// function que

// function conutvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
// return count;
//
// }

// let conuntvow = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// let name = conuntvow('shagun');
// console.log("the count of the string is ", name);

// for Ecach Loop in arrys

// foreach loop

// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(),idx , arr);

// });

//for a given array of numbers, print the square of each value using the forEach loop

// let sqr = [3,7,5,3,8];

// sqr.forEach((val) => {
//   let square = val * val;
//   console.log(square);

// });

// Best for me

// let sqr = [3,7,5,3,8];

// let calcsquare = (val) => {
//   let square = val * val;
//   console.log(square);

// }
// sqr.forEach(calcsquare);

//map method

// let num = [2,4,5,7,9];

// let newArr = num.map((val) =>{
//   return val*2;
// })
// console.log(newArr);

//Filter

// let arr = [1,2,4,6,8,9,5,3,];

// let filt = arr.filter((val) =>{
//   return val % 2 === 0;
// });
// console.log(filt);

// We are given array of marks of student and print the mark which is 90+

// let marks = [87,93,64,99,86];
// let topper = marks.filter((val) => {
//   return val > 90;
// });
// console.log(topper);

// let num = prompt("Enter the size of arr");
// let arr = [];
// for (let i = 1; i <= num; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr) =>{
//   return res + curr;
// });

// console.log(sum);

// let num = prompt("Enter the size of arr");
// let arr = [];

// for (let i = 1; i <= num; i++) {
//   arr[i - 1] = i;

// }
// console.log(arr);
// let mulSum = arr.reduce((rev,curr) =>{
//   return rev*curr;
// });

// console.log(mulSum);

// console.log(5 + "5");
// console.log("5" - 2);

// foreach que
// let num = [10,20,30,40,50];
// let print = num.forEach((val) =>{
//   console.log(val);
// });
// console.log(print);

// // map que
// let num1 = [1,2,3,4,5];
// let print1 = num1.map((val) =>{
//   return val + 5;
// });
// console.log(num1);
// console.log(print1);

// // map que2

// let lang = ["js", "html", "css"];
// let capLANG = lang.map((val) =>{
//   return val.toUpperCase();
// });
// console.log(capLANG);

//filter que1

// let num = [1, 2, 3, 4, 5, 6];

// let filterNum = num.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(filterNum);

// filter que2

// let num = [20, 60, 45, 80, 30];

// let numGr50 = num.filter((val) =>{
//   return val > 50;
// });
// console.log(numGr50);

// filter que3

// let name1 = ["Ram", "Shyam", "Amit", "Suresh"];

// let bigNames = name1.filter((val) => {
//   return val.length > 4;
// });
// console.log(bigNames);

// reduce que1

// let num = [10, 20, 30, 40];

// let sum = num.reduce((pre,curr) =>{
//   return pre + curr;
// });
// console.log(sum);

// reduce que2
// let num = [1, 2, 3, 4]
// ;

// let sum = num.reduce((pre,curr) =>{
//   return pre * curr;
// });
// console.log(sum);

// reduce que2
// let num = [10,5,25,8];

// let maxNum = num.reduce((pre,curr) => {
//   return pre > curr? pre : curr;
// });
// console.log(maxNum);

//isPalindrome  121 ---> 121

// function isPalindrome (num){
//   for(i = 0; i <= num.length; i++){
//     if(num[i] !== num[num.length -1 - i]){
//       return false;
//     }
//   }
//   return true;
// };
// let val = prompt("Enter the num");
// let result = isPalindrome(val);
// console.log(result);

let num = Number(prompt("Enter number"));
let arr = [];

for (let i = 1; i <= num; i++) {
  arr[i - 1] = Number(prompt("Enter arr number"));
}
console.log(arr);
let sum = arr.reduce((res,curr) =>{
  return res + curr;
});
console.log(sum);
