// /*Step 1: Normal message alert function 
// --------------------------------------*/

// var message = function(){
//     alert("Normal message alert  function!");
// }

// /* Step 2: Arrow message alert Functions 
// ---------------------------------------- */

// var message = ()=>{
//     alert("Arrow message alert function.");
// }

// /* Step 3:start function call  
// normal message alert function 
// with Timeout function  
// -------------------------*/

// var message = function(){
//     alert("start call normal message alert  with setTimeout!");
// }
// function start(){
//     setTimeout(message,2000);
// }

// /*Step 4:start function call 
// arrow message aleart function 
// with Timeout function  
// -----------------------------*/


// var message = ()=>{
//     alert("start call arrow  messgae alert with setTimeout!");
// };

// function start(){
//     setTimeout(message,2000);
// };

// /*Step 5:start call anonymous aleart 
// with Timeout function  
// -----------------------------------*/

// function start(){
//     setTimeout(function(){
//         alert("You clicked Me!");
//     },2000);
// };


// /* This code is start and stop timeout function 
// ----------------------------------------------*/ 

// var id = 0;
// var message = ()=>{
//     alert("Click to stop to stop alert message!");
// };

// function start(){
//     id = setInterval(message,5000);
//     console.log(id);
// };

// function stop(){
//     clearTimeout(id);
// }