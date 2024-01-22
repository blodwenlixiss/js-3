"use strict";
// 1. დაწერეთ for ციკლი 0 დან 100 - მდე
//  console.log ში დაბეჭდეთ ინდექსი i

// for (let i = 0; i <= 100; i++) {
//   let x = i;
//   console.log(x);
// }

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე
// console.log ში დაბეჭდეთ ინდექსი i

// let index = 0;
// while (index < 100) {
//   index++;
//   console.log(index);
// }

// 3.შექმენით 5 ელემენტიანი  მასივი,
//  სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები
//   და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება.
//    დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა.
//    ისე როგორც ლექციაზე გავაკეთეთ.

// let arr = ["red", "white", "black", "blue", "green"];
// arr.push("grey");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("yellow");
// console.log(arr);

// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი,
//  შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ
//   ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i)
//    მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის
//     ფაილში გვიწერია

// const arr = [];
// for (let i = 0; i < 10000; i++) {
//   arr.push(i * i);
// }
// console.log(arr);

// const arr1 = [];
// let y = 0;
// do {
//   arr1.push(y * y);
//   y++;
// } while (y < 10000);
// console.log(arr1);

// const arr2 = [];
// let k = 0;
// while (k < 10000) {
//   arr2.push(k * k);
//   k++;
// }
// console.log(arr2);

// 5.შექმენით 5 ელემენტიანი მასივი,
//  რომლის თითოეული ელემენტი არის რიცხვი
//  და for ცილის გამოყენებით დათვალეთ ჯამი

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს
//  ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის
//   კენტი ან false -ს თუ რიცხვი არის ლუწი.

// const numOdd = (num) => {
//   num % 2 === 0 ? console.log(false) : console.log(true);
// };
// numOdd(4);
// console.log(4 % 2);

// 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ
//  (MY NAME IS JOHN) და დააბრუნებს
// LowerCase (my name is john) სტრინგს

// let string = "MY NAME IS JOHN";
// const lowerCase = (str) => {
//   console.log(str.toLowerCase());
// };
// lowerCase(string);

// 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს
//  გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filterFunction = (arr) => {
//   console.log(arr.filter((x) => x % 2 === 0));
// };
// filterFunction(arr);
