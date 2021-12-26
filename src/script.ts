// console.log("Hello");
// tutorial -3 type define & check

// let playerName = "Mashrafi"; 
// //declared and define aksathe korle next time value change korle error asbe

// console.log(playerName);

// playerName = 34;

// console.log(playerName);

// let playerName;
// //declared and define aksathe na korle next time value change korle error asbe na

// playerName = "Mashrafi"

// playerName = 34;

// console.log(playerName);



// function multiply(a : number,b : number) //a:number atake explicit type set kora bola hoy -- bole deya je a ki hobe
// {
//     return a*b;
// }

// console.log(multiply(5,4));



// let mixed = [ 'sakil', 3, true,{}];
// // array te first ja define kora thakbe same type push kora jabe different type push korle error asbe

// // mixed.push("ehtesum");
// mixed.push({
//     name: "ehtesum",
// });

// console.log(mixed);


// let person = {
//     // object te first ja define kora thakbe same schema use kora jabe different type push korle error asbe
//     name : "sakil",
//     age: 26,
//     job : true,
// }

// person.captan = "ban"; // object schema age theke nai tai error


// tutorial - 4 Explicit & Union Types

// let a: string; // variable declared time explicit bole deya type ki  hobe

// let b: number;

// let c : string | number

//c = 3/"sakil" ---no error

// b = 4;
// a="saa";


//------------array
// let a: (string | number | boolean)[] = [];

// a.push("sakil", 55, false)



//-----------object
// let c: object; // avabe objcet dile schema ja khusi tai deya jabe

// c= {

// }

// c = [1,2,3] ---// array dileo accept korbe cause schema bola nai & array is  sudden type objcet 
// objcet schema fixed korte chaile
// let c: {
//     name: string,
//     age: number,
//     adult: boolean,
// }

// c = {
//     name : "sakil",
//     age : 44,
//     adult : false,
// }


// tutorial --5 dynamic type(any type) or any type

// let a: any;

// a = 4;
// a = "sakil"

// let b: any[] = [];
// b.push('sakil');
// b.push(44);

// let c : {
//     name: any,
//     age: any,
// }
// c = {
//     name : 'bangladesh',
//     age : "44",
// }

// Tutorial --6 How to use function

// let myfunc, myfunc2: Function;   // type Function & function use kora jabe na cause ata akta js keyword
// myfunc = (a: string, b: string , c: string = 'true') =>{
//     console.log(c);
//     console.log(`This Is ${a} ${b}`);
// }
// myfunc("a", "b",  "jkhjk");


// myfunc2 = (a: number, b: number , c: string = 'true') : number =>{
   
//     return a+b;
// }
// myfunc2(4,5);
// myfunc = 7;


// Tutorial --7 Type Aliases


// const userDetails = (id: string | number, user: { name: string; age: number}) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const sayHello = (user: { name: string; age: number}) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };

// Using ALiases for using same value in different ways

// type stringOrNum = string | number;
// type userType = { name: string; age: number};


// const userDetails = (id: stringOrNum, user: userType) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };


// Tutorial --8 Function signatures

// let calculation: (x: number, y:number, z:string) => number; // ata function ar akta signature as like let a: string; a="sakil" function ar sognature follow korte hobe we already know that as a function have a parameter and return type | use this function (myFunc) in next time also use this signature.

// // myFunc = (a:number, b:number) => {
// //     return a+b;
// // }

// // calculation = (a:number, b:number, c:string) => {
// //     if(c==="add"){
// //         return a+b;
// //     }else{
// //         return a-b;
// //     }
// // }

// // console.log(calculation(5, 6, "add"));


// //object ar same function ar moto signature create kora jay
// let userDetails: (id: number | string, userInfo:{
//     name: string, age: number
// }) => void

// userDetails = (id: number | string, user:{ //object ar name change kora jabe but object ar property change kora jabe na userInfo --> user korle problem nai
//     name: string,
//     age: number,
// }) => {

// }

// Tutorial --9 & 10 Working with calsses & Access Modifiers

// class Player {   // class ar property by default public
//     name: string;  // access modifier use korle class baire theke access kora jabe na as like private name: string; private hole barie theke kisui kora jabe na.
//     age: number;
//     country: string; // readonly country : string --> readonly hobe read kora jabe but modify kora jabe na.
//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//             // access modifier bole dile constructor ar modde this diye set kora lagbe na and shortcut e lekha jabe as like
//             // class Player{
//             //     constructor(
//             //         private name: string,
//             //         public age: number,
//             //         readonly country: string,
//             //     ){}
//             // }

//     play(){
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }

import { Player } from './classes/Player.js';

const mash = new Player("mash", 44, "Ban");
const sakib = new Player("sakib", 55, "Ban");
let res = mash.play();
let res1 = sakib.play();
console.log(res);
console.log(res1);

const players: Player[] = [];

players.push(sakib);
players.push(mash);

console.log(players);