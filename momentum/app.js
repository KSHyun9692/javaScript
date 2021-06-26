// const a = 5;
// let b = 2;
// let myName = "KSH";

// var K = 5;

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// myName = "kim";
// console.log("name " + myName);

// const amIFat = true;
// let something;
// console.log(something, amIFat);

// const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const nonsense = [1, 2, "hello" , false, true, null];

// console.log(week[5], nonsense);

// week.push("hahaha");

// console.log(week);

// //object 만들기
// const player = {
//     name: "KSH",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// player.fat = false;
// console.log(player);
// player.lastName = "KS";
// console.log(player);


// function sayHello(nameOfPerson, age){
//     console.log("Hello!" + nameOfPerson + age);
// }

// alert();

// sayHello("KSH", 12);
// sayHello("KKK", 1222);
// sayHello("KLW", 124);

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a, b){
//     console.log(a / b);
// }
// plus(8, 60);
// divide(7, 4);

// const player = {
//     name: "KSH",
//     sayHello:function(otherPersonName){
//         console.log("hello" + otherPersonName);
//     },
// };

// player.sayHello("KKK");

//const는 업데이트 불가, let은 업데이트 가능(수정가능)
// const calculator = {
//     add: function(a,b){
//         return a + b;
//     },
//     min:function(a,b){
//         console.log(a - b);
//     },
//     divide: function(a,b){
//         console.log( a/ b);
//     },
//     power:function(a,b){
//         console.log( a * b);
//     }
// };

// const age = 26;

// function calculateKrAge(ageOfForeigner){
//    return ageOfForeigner + 2;
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);

// const age = parseInt(prompt("How old are you?"));

// true || true === true
// false || true === true

// true&& true === true
// false && true === false


// if(isNaN(age) || age < 0){
//    console.log("Please write a real pisitive number");
// }else if (age < 18) {
//    console.log("You are young");
// }else if(age >= 18 && age <= 50){
//    console.log("You can drink!!!")
// }else if(age > 50 && age <= 80){
//    console.log("You should exercise");
// }else if(age > 80){
//    console.log("You can do whatever you want");
// }

// const title = document.getElementById("title");

// title.innerText= "Got you!";

// console.log(title.id);
// console.log(title.className);

// const title1 = document.querySelectorAll(".hello h1");
// const title = document.querySelector("div.hello:first-child h1");
// const title2 = document.getElementsByTagName("hello");

// console.dir(title);
// console.log(title1);
// console.log(title2);


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   h1.style.color = "blue";
}

function handleMouseEnter(){
   h1.innerText = "mouse is here!";
}

function handleMouseLeave(){
   h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
   document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
   alert("copier");
}

function handleWindowOffline(){
   alert("SOS no WIFI");
}
function handleWindowOnline(){
   alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);