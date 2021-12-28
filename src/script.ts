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

// import { Player } from './classes/Player.js';

// const mash = new Player("mash", 44, "Ban");
// const sakib = new Player("sakib", 55, "Ban");
// let res = mash.play();
// let res1 = sakib.play();
// console.log(res);
// console.log(res1);

// const players: Player[] = [];

// players.push(sakib);
// players.push(mash);

// console.log(players);

// Tutorial --12 Working with Interfaces


//object a interface ar use
//---------------
// interface RectangleOptions {
//     width: number;
//     length: number;
// }

// function drawRectangle(options: RectangleOptions){
//     let width = options.width;
//     let lenght = options.length;
// }
// jodi direct data pathate chai that means programmer known je ki type ase /ki rokom interface ase chailei akta jinis besi deya jabe na ja interface ar sathe match kore na but ....
// drawRectangle({
//     width: 30,
//     lenght: 20,
// })

//abr jodi programmer na jane and jodi aro kisu extra pathate hoy tobe object ke akta variable ar modde pathate hoy mane seta tokhon pass by reference akare jabe and se dekbe interface ja ase ta ase kina but tar besi thakle tar kono problem nai
// let threeDoptions = {
//     width : 30,
//     length: 20,
//     height : 50,
// };
// drawRectangle(threeDoptions);
//---------------------
//class a interface use

// import { Player } from "./classes/Player";
// import { IsPlayer } from "./interfaces/isPlayer";

// const mash = new Player("mash", 55, "Ban");
// const sakib = new Player("sakib", 33, "Ban");
// // sakib player theke isplayer name interface implements kore but chaile ata avabeo kora jay
// let sakil : IsPlayer;
// sakil = new Player("sakil", 25, "Ban");

// //------ Array te use kora jay

// const players : IsPlayer[] = [];
// players.push(sakil);
// players.push(mash);

// Tutorial --13 -Generics

//Generics hocce reuseable block of code jeta mainly amra type ar khetre use korte pari mane user je type ar data dicce jeta jodi amra dorte chai tahole variable akare dorte pari/ generics way te type receive korte pari and ta variable ar modde diye dite pari type hisebe as like <T>

// const addID = <T >(obj : T) => {
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id };
// };

// const addID = <T extends object>(obj : T) => {
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id };
// };
// typescript jane na je object ar modde ki ki deya hobe se jane sudu akta object deya hobe. TypeScript je object ta desturcture korce se compile howar age code read korce tai <T> ata bolar age projonto se jane na obj ta call korar time user ki dibe. user ki dicce sei puro jinistai hocce variable and user ja dicce take obj ar modde capture korte hobe then use kora jabe.

// let user = addID({
//     name: "sakil",
//     age : 25,
//     country : "BAN",
// })
// user.age;
// user.id;

// let user = "sakil";
//addID(user); // ata dileo kono error dibe na cause ar type string seta <T> receive korce and obj type kore deyece string but kono error dey ni cause string ke desturcture kora jay but ata solve kora jay < T extends objcet> ata bole dile <T> jeta capture korbe setake must object ke extends korte hobe. 

// const addID = <T extends {
//     name : string;
//     age : number;
// }>(obj : T) => {
//     let id = Math.floor(Math.random() * 100)
//     return{...obj, id };
// };
// akhane name age bolar pore o country accept korce cause reference ar bepar user ke pathano hoice and se check korce tar mode ja ace ta mass korlei hobe extra dile problem nai cause receive korce variable akre . at least name , age thaktei hobe.
// let user = addID({
//     name: "sakil",
//     age : 25,
//     country : "BAN",
// })

// console.log(addID(user));

// Interface use Generics

// interface APIResponse<T> {
//     status: number;
//     type: string;
//     data: T;
    // abr jodi amra generics way te variable ar modde type ta pete chai <T> dite hobe and data : T;
//}

//const reponse1: APIResponse<string> ={ //<ar modde bole dite hobe <T> konta receive korbe
    //status : 200,
    //type: 'good',
    //data: "sakil", // srting dile error asbe cause amake bolei dice pathate hobe object but ami string pathaci <string> dile sob thik ase.

    // data :{
    //     name: "sakil",
    //     something: 300,
    // }
//}       
// generics-- age theke na jena value assign korar age porjonto je ar type ta ki hobe sei type take dynamically capture kore seta move kora jay . user ki pathce seta ke age theke bujte hole avabe connection korte hoy generics diye. 

// Tutotial --14 --ENUM Types-------

// enum RType { // as like object ar moto syntex and type hoye jabe enum type/Rtype.
//     SUCCESS,
//     FAILURE,
//     UNAUTHENTICATED,
//     FORBIDDEN,
// }

// // optional akta type mysql/mongodb te 
// interface APIResponse<T> {
//         status: number;
//         //type gulo kon order a design kora ase segulo mone na rekhe kaj kora jay enum use kore as like emun ar name type kore Rtype.suggestion asbe and ate kore ar kono kisu mone rakha lagbe na.
//         type: RType;
//         data: T;
// }
// const response1: APIResponse<string> ={
//     status : 200,
//     type: RType.FORBIDDEN,
//     data: "sakil",
// };
//console.log(response1); // ata output index 0 theke suru kore show kore Rtype ar.

// Tutorial --15 -- Working with Tuples----------

//tuples onk ta array moto but order ta important
//let a = [3, 'hello', {p:3}];

//a[0] = "world";// akhane je kono number index a je kono type ar data(je type gulo array te now existing ase) je kono position a dilei hobe. but.....
//a[1] = false; // type boolean je array te chilo na tai deya jabe na.

// jodi order moto type set korte chai tuples use korte hobe explicitly every position a kontar kon type ta bole dite hobe.
//let b:[number, string, object] = [4, 'world', {l: 2}];
//b[1] = 5; // akhane ata error cause 1 index ar type string tai string e dite hobe.

