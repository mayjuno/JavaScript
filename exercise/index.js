// document.write('<h2>JavaScript Area</h2>');
/* console.log('Hello World!');
let a  = 1
let b = 2
let c = a+b
console.log(c) */
/*===========================================
    Type Conversion in JavaScript
============================================*/
/*
// Data Type 
let num = 43;
let str1 = 'hello world';
let check = true;
let num_str = '2022'
console.log(num,typeof(num));
console.log(str1,typeof(str1));
console.log(check,typeof(check));
console.log(num_str,typeof(num_str));
// connverting the typeof variables
console.log(num,typeof(String(num)));
console.log(str1,typeof(str1));
console.log(check,typeof(String(check)));
console.log(num_str,typeof(Number(num_str)));
num_str = Number(num_str);
console.log(num_str+2)

let mix_num = Number('887a')
console.log(mix_num,typeof(mix_num));

let str_num2 = '2022'
console.log(str_num2,typeof(str_num2))
str_num2 = parseInt('2022')
console.log(str_num2,typeof(str_num2))

let str_float = parseFloat('3.14378989')
console.log(str_float,typeof(str_float))
console.log(str_float.toFixed(2),typeof(str_float))

*/

/* =============================================
    Exercise 10:
    Operators in JavaScript part 1
=================================================*/

/*
Arithmetic
Assignment
String
Conditional
Logical
Bitwise
Comparsion
Type of
*/

/* Arithmetic operators
=======================
Addition        +
Subtraction     -
Multiplication  *
Division        /
Modulus         %
Increment       ++
Decrement       --
*/
/*
let x = 30;
let y = 6;
document.write(`<div class="claculate"><p>x = 30 , y = 6 </p>`)
document.write(`<p>Addition of x + y = ${x+y}<p>`);
document.write(`<p>Substraction of x - y = ${x-y}<p>`);
document.write(`<p>Multiplication of x * y = ${x*y}<p>`);
document.write(`<p>Devision of x / y = ${x/y}<p>`);
document.write(`<p>Moduclus of x % y = ${x%y}<p>`);
document.write(`<p>Increment of ++x = ${++x}<p></div>`)
*/

/* Assignment Operators 
=======================
=      x=y      x=y
+=     x+=y     x=x+y
-=     x-=y     x=x-y
*=     x*=y     x=x*y
/=     x/=y     x=x/y
%=     x%=y     x=x%y
^=     x^=y     x=x^y
|=     x|=y     x=x|y
**=    x**=y    x=x**y
*/

/* String operators
=======================
+       Concatenation
+=      Same as assignment operator
*/

/*
let first_name = 'William';
let last_name = 'WatGyi';
let sentence = 'My name is';


document.write(sentence +' '+first_name +' '+ last_name)

document.write(`<p>${sentence} ${first_name} ${last_name}<p>`)

sentence +=' '+first_name+' '+last_name;
document.write(sentence);

*/

/* =============================================
    Exercise 11:
    Operators in JavaScript part 2
=================================================*/
/* မှတ်ချက် + operator က ဘယ်မှ ညာသို့ အလုပ်လုပ်ပါသည် ။ */
/*
let a = 5;
let b = 10;
var result = a + b
document.write('<p>Value of result is :',result,'</p>');
var result = 'Hello'+a+b;
document.write('<p>Value of result is :',result,'</p>');
var result = a+b+'Hello '+a+b; // first a+b is 5+10=15 and the next a+b is 5+10= '510'
document.write('<p>Value of result is :',result,'</p>');

*/

/* Conditional operators
========================
Tinary operator
variable = (condition)? true value : false value
*/
/*
let age = 18;
let result = age<18?'Your so young.':'Your old enought.'
document.write('<p>',result,'</p>')
document.write('<p>',age<=20?'You should stay with family':'That is your choice','</p>')

*/

/* Logical operators
====================
let x = 7 and y = 4
&&      and     (x<10 && y<10) is true
||      or      (x<5 or y<10) is false
!       not     !(x==y) is true
*/

/* Comparison operators
=======================
==          Equals to
===         Equal value and data type
!=          not equal
!==         not equal value or data type
>           Greater than
<           Less than
>=          Greater than or equals to
<=          Less than or equals to
*/

/* Bitwise Operators
====================
&       AND
|       OR
~       NOT
^       XOR
*/

/*===============================
    Exercise 12:
    Control Statement in JavaScript
==================================*/
/* 
Two types of Control Statements
1. Conditional Statements
    i ) if, if-else, if-else if-else
    ii) Switch statement
2. Iterative Statements
    i  ) for
    ii ) while
    iii) Do while
    iv ) for...in
3. Other Statements
    i ) Continue
    ii) Break
*/
// Exercise 13:
/*
let age = 20; 
let licind = false;
let alchol_test = 10;
if (age>=18)
{
    if(licind){
        if(alchol_test <= 20){
            document.write('<p>You can drive be care.</p>');
        }
        else {
            document.write('<p>Don\'t allow to drive a car.</p>');
        }
    }
    else{
        document.write('<p>You need to make a driving license.</P>');
    }
}
else{
    document.write('<p>You are not enought to drive a car.</p>');
}

*/
/*
// Even or Odd

let num = -7
if (num > 0) {
    if (num%2 == 0){
        document.write('<p>This is number is even number.</p>')
    }else{
        document.write('<p>This number is Odd number.</p>')
    }
}else{
    document.write('<p>This number is negative number.</p>')
}
*/

/*==============================================
        Switch-Case Statement in JavaScript
        Exercise 14:
===============================================*/
/*
document.write('<h3>Switch-Case Statement in JavaScript</h3>')

var month = 4;
switch (month) {
    case 1:document.write('<p>Junary</P>');
        break;
    case 2:document.write('<p>Febuary</P>');
        break;
    case 3:document.write('<p>March</P>');
        break;
    case 4:document.write('<p>April</P>');
        break
    case 5:document.write('<p>May</P>');
        break;
    case 6:document.write('<p>June</P>');
        break;
    case 7:document.write('<p>July</P>');
        break;
    case 8:document.write('<p>Augest</P>');
        break;
    case 9:document.write('<p>September</P>');
        break;
    case 10:document.write('<p>October</P>');
        break;
    case 11:document.write('<p>Novenber</P>');
        break;
    case 12:document.write('<p>December</P>');
        break;
    default:document.write('<p>Wrong input month</p>')   
}

*/

/*===============================
    Exercise 15:
    For Loop in JavaScript
 ===============================*/
/*
let year = 2022;
document.write('<h3>For Loop in JavaScript</h3>')
for(let i=1 ; i<=20 ; i++){
        document.write(`${year+i}<br>`)

}
*/

/* Exercises 16:
 While loop in JavaScript
*/

// let check = 10;
// let i = 1;
// while(i <= check){
//     document.write(`<p>${i}</p>`)
//     i++;
// }

// let check = 1;
// while(check){
//     if (check > 25){
//         break;
//     }
//     else{
//         document.write(`<p>${check}</p>`);
//         check+=1;
//     }
    
// }

/* Do while loop in JavaScript
==============================
    Exercise 17:
*/

// var check = 1;
// do{
//     document.write(`${check}<br>`);
//     check+=1;
// }while(check< 1)

// /* Armstrong number 
//     Exercise 18:
// */

// var number = 153;
// var sum = 0;
// let temp = number;
// while (temp > 0 ){
//     // finding the one's digit
//     var remainder = temp % 10 ;
//     sum += remainder* remainder* remainder;
//     //removing the last digit from the number
//     temp = parseInt(temp /10); // convert float into integer
// }
// // check the number is Armstrong
// if (sum==number){
//     document.write(`${number} is an Armstrong number`)
// }
// else {
//     document.write(`${number} is not an Armstrong number`)
// }

///* The another way to test */

// var lower = 1;
// var upper =1000;

// while(lower< upper){
//     var number = lower;
//     var sum = 0;
//     var number_of_digit = number.toString().length;
//     let temp = number;
//     while (temp > 0 ){
//         // finding the one's digit
//         var remainder = temp % 10 ;
//         sum += remainder**number_of_digit;
//         //removing the last digit from the number
//         temp = parseInt(temp /10); // convert float into integer
//     }
//     // check the number is Armstrong
//     if (sum==number){
//         document.write(`${number} is an Armstrong number <br>`)
//     }
//     lower+=1;
// }

/* Factorial of a number */

// var i = 1;
// var n = 5;
// var f = 1;
// do{
//     f*=i;
//     i++;
// }while(i<=n)
// document.write(`${i-1}! is ${f}`);

/* ==============================
    Exercise 19:
    Function in JavaScript
  =============================*/

//   function sum(args,args2){
//       return args+args2
//   }
//   var output = sum(3,4)
//   document.write(`${output}<br>`)

//   var output = sum("Hello",'World');
//   document.write(`${output}`)

// document.write('Scope of variables<br>')

// let x = 5;
// var y = 1;
// function sum(parX){
//     let x = 10;
//     z = 99999 // Don't declar any in function is global variable
//     function inner() {
//         let x = 100;
//         let y = 200;
//         a = 99.9 // Don't declar any in function is global variable
//         document.write(`inner function: x+y=${x} + ${y} =${x+y}<br>`)
//         return x+y;
//     }
//     document.write(`local x: ${x}<br>`)
//     return x+inner()+parX+y;
    
// }
// var total = sum(x)
// document.write(`inner result (x+y)+local:x +  global x+y : ${total}<br>`)
// document.write(`x= ${x} y= ${y}<br>`)
// document.write(`z= ${z}<br>`)// Don't declar any in function is global variable
// document.write(`a= ${a}<br>`)// Don't declar any in function is global variable

/*==============================
    Strings in JavaScript
    Exercise 21:
===============================*/

// /* Escape string */
// document.write("Hello! Welcome to Advance \"JavaScript\" Course.<br>")
// document.write("It\'s time to learn \"JavaScript\".")
//document.write('6\\2 is 3.')


/* String Method in JavaScript
===============================
length
toLowerCase()
toUpperCase()
startsWith()
endsWith()
search()
indexOf()
lastIndexOf()
replace()
concat()
split()
substr()
substring()
*/
// // length
// var str = "Welcome to learning JavaScript.";
// var len_str = str.length;
// document.write(str,'<br>');
// document.write(`Length of string ${len_str} characters.<br>`);

// var num = 2022;
// var len_num = num.toString().length;
// document.write(num,'<br>');
// document.write(`Lenght of number ${num} is ${len_num}.`)

// // toLowerCase()/ toUpperCase()
// var str = "WELCOME To Learning JavaScript and Java.";
// document.write(str,'<br>');
// var lower_str = str.toLowerCase();
// document.write(lower_str,'<br>');
// var upper_str = str.toUpperCase();
// document.write(upper_str,'<br>');

// // includes()
// var isSubStr = lower_str.includes('learn');
// document.write(isSubStr,'<br>');

// // startsWith()/endsWith()
// var isStartWith = lower_str.startsWith('wel');
// document.write(isStartWith,'<br>');
// var isEndsWith = lower_str.endsWith('script.');
// document.write(isEndsWith,'<br>');

// // search()
// var searchBy = lower_str.search('to');
// document.write(searchBy,'<br>')

// // indexOf()/ lastIndexOf()
// var indexOf_subStr = lower_str.indexOf('learn');
// document.write(indexOf_subStr,'<br>')
// var lastIndexOf_subStr = lower_str.lastIndexOf('learn');
// document.write(lastIndexOf_subStr,'<br>')

// // replace()
// var replace_str = str.replace('JavaScript','Python')
// document.write(replace_str,'<br>')
// var replace_str_all = str.replace(/Java/g,'Python') // replace with global
// document.write(replace_str_all,'<br>')

// // concat()
// var concat_str = str.concat(replace_str_all)
// document.write(concat_str,'<br>')

// // split()
// var split_str = str.split(" ")
// document.write(split_str,'<br>')

// // repeat()
// var repeat5 = str.repeat(5)
// document.write(repeat5,'<br>')

// // slice()
// var slice_str = str.slice(20,31) // all parameters is index not include last
// document.write(slice_str,'<br>')

// // substr()
// var substr_str = str.substr(20,10) // first parameters is index next is characters
// document.write(substr_str,'<br>')

// // substring()
// var substring_str = str.substring(20,30) // first parameters is start index next is end index including last
// document.write(substring_str,'<br>')

/* ==============================
        Arrays in JavaScript
        Exercise 23:
  ==============================*/

//   document.write('<h4>Array in JavaScript</h4>')
//   var  programming_languages = [
//       'Python',
//       'JavaScript',
//       'Java',
//       'C',
//       'C++',
//   ]
//   programming_languages.pop() // pop() methot
//   for(let i=0 ;i<=programming_languages.length-1;i++){
//       document.write(programming_languages[i],'<br>')
//   }
//   document.write('<hr>')

//   var fruits = new Array('Apple', 'Orange', 'Banana')
//   fruits.push('Raspbarry') // push() method
//   fruits.push(100) // push() integer in string array
//   for(let i=0 ;i<=fruits.length-1;i++){
//     document.write(fruits[i],'<br>')
// }

/*==============================
    Objects in JavaScript part 1
        Exercise 24:
 ===============================*/
// document.write('<h3>Objects in JavaScript</h3><br>')

// var car_manufacturer = "Audi";
// var car_model = 'Q7';
// var price = 50000;
// function allwheeldrive(){
//     document.write('This car is from Quattro all wheels drive.')
// }
// allwheeldrive();

// var car = {
//     manufactuer: 'Audi',
//     model : 'Q7',
//     driving_mode : '4WD',
//     price : 50000,
//     allwheeldrive : function() {
//         return(`This car is from ${this.manufactuer} ${this.model} ${this.driving_mode} drive.<br>`)
//     }
// }
// document.write(car.allwheeldrive());
// document.write('price is ',car.price,'$.<br>');

// function cars(company,model,price,drive_type,fuel='Ortain') {
//     this.company = company;
//     this.model = model;
//     this.price = price;
//     this.drive_type = drive_type;
//     this.fuel = fuel;
//     this.info = function() {
//         document.write(`This is car is manufactured by ${this.company} ${this.model} ${this.drive_type} drive ${this.fuel} engine.<br>`);
//         document.write(`Price is ${this.price}.<br>`);
//     }

// }
// var c1 = new cars('Audi','Q7',50000,'4WD')
// c1.info()
// var c2 = new cars('Toyotar','Crown',50000,'Rear Drive','Disal')
// c2.info()
// // updating the objects properties
// c2.price = 120000;
// c2.info()
// // adding the objects properties
// c1.color = 'Black';
// document.write(`Color is ${c1.color}.<br>`)
// // deleting the objects properties and methods
// var c3 = new cars('Toyotar','Crown',50000,'Rear Drive','Disal')
// delete c3.price;
// c3.info()
/*==============================
    Objects in JavaScript part 2
        Exercise 25:
 ==============================*/

/*==============================
    Math Objects in JavaScript 
        Exercise 26:
 ==============================*/

 /* 
    JavaScript Math Objects Methods
abs(x) Returns the absolute value of x
acos(x) Returns the arccosine of x , in radians
acosh(x) Returns the hyperbolic arccosine of x
asin(x) Returns the arcsine of x, in radians
asinh(x) Return the hyperbolic arcsine of x
atan(x) Returns the arctanget of x s a numeric value between -Pi/2 and Pi/2 radians
atan2(x) Returns the arctangent of the quotient og its arquments
atanh(x) Returns the hyperbolic arctangent of x
cbrt(x) Returns the cubic root of x
celi(x) Returns x , rounded upwords to the nearest integer

 */

/*==============================
    Object Literal in JavaScript 
        Exercise 27:
 ==============================*/
// var rectangle_obj_litreal = {
//     length : 5,
//     width : 10,
//     getArea : function (){
//         return this.length*this.width;
//     },
//     getParameter : function (){
//         return 2*(this.length+this.width);
//     }
// };
// document.write(`The lenght of rectangle is ${rectangle_obj_litreal.length}.<br>`)
// document.write(`The with of rectangle is ${rectangle_obj_litreal.width}.<br>`)
// document.write(`The area of rectangle is ${rectangle_obj_litreal.getArea()}.<br>`)
// document.write(`The parameter of rectangle is ${rectangle_obj_litreal.getParameter()}.<br>`)
 
/*==============================
    Date Objects in JavaScript 
        Exercise 28:
 ==============================*/
//// One Second write
//  var s = 0;
//  function oneSecond() {
//      s +=1;
//      document.write(`${s}s<br>`);
//  }
//  setInterval('oneSecond()',1000);

// var now = new Date(2022,3,23,18,51);
// document.write(now)

// var now = new Date("Aprial 23 2022 18:53:00");
// document.write(now)

/* JavaScript Date Object Methods
=================================
Date()
getDate()
getDay()
getFullYear()
getHour()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
getTime()

etc...
*/ 
///* Exercise 28 Creating a clock */
// function clock(){
//     var cd = new Date();
//     var hours = cd.getHours();
//     var minutes = cd.getMinutes();
//     var seconds = cd.getSeconds();
//     document.write(`${hours}:${minutes}:${seconds}<br>`)
// }
// setInterval('clock()',1000);

 /*==============================
    Object Constructor in JavaScript 
        Exercise 29:
 ==============================*/
//  var rectangle_obj_constructor = new Object(); //var obj_name = {};
//  rectangle_obj_constructor.length = 5;
//  rectangle_obj_constructor.width = 10;
//  rectangle_obj_constructor.getArea = function (){
//     return this.length*this.width;
//  };
// rectangle_obj_constructor.getParameter = function (){
//     return 2*(this.length+this.width);
// };
// document.write(`The lenght of rectangle is ${rectangle_obj_constructor.length}.<br>`)
// document.write(`The with of rectangle is ${rectangle_obj_constructor.width}.<br>`)
// document.write(`The area of rectangle is ${rectangle_obj_constructor.getArea()}.<br>`)
// document.write(`The parameter of rectangle is ${rectangle_obj_constructor.getParameter()}.<br>`)

/*============================== 
   Object Constructor function Methods 
  ==============================*/

// function rectangle_obj_constructor_func(length,width){
//     this.length = length;
//     this.width = width;
//     this.getArea = function(){
//         return length*width;
//     };
//     this.getParameter = function(){
//         return 2*(length+width);
//     }
// }
// var rec_obj_con_func_obj = new rectangle_obj_constructor_func(5,10);
// document.write(`The lenght of rectangle is ${rec_obj_con_func_obj.length}.<br>`)
// document.write(`The with of rectangle is ${rec_obj_con_func_obj.width}.<br>`)
// document.write(`The area of rectangle is ${rec_obj_con_func_obj.getArea()}.<br>`)
// document.write(`The parameter of rectangle is ${rec_obj_con_func_obj.getParameter()}.<br>`)

 /*==============================
    Object Prototype in JavaScript 
        Exercise 30:
 ==============================*/
// // object literal method
//  var abc = {
//      Name :'William',
//      Subject :'JavaScript',
//      Address :'Mandalay'
//  };
//  console.log(abc);
// // object constructor method
//  function xyz(name,subject,address) {
//      this.name = name;
//      this.subject = subject;
//      this.address = address;
//  }
//  xyz.prototype.getName = function(){
//      return this.name;
//  }
//  xyz.prototype.getAddress = function(){
//      return this.address;
//  }
// // /* add the object proparties */
// // xyz.job = 'Software Developer'
// // /* Adding the object proparties by prototype */
// xyz.prototype.job = 'Software Developer';
//  var x1 = new xyz('Raymond','Python','Australia');
//  console.log(x1)


 /*==============================
    Prototypal Inheritance in JavaScript 
        Exercise 31:
 ==============================*/

//  const Employee = {
//      Post : function (){
//          return "A software developer";
//      },
//      changeName : function (name){
//          this.name = name;
//      }
//  };
// /* I think that is object constructor method */
//  var e1 = Object.create(Employee);
//  e1.name = "William";
//  e1.role = "Writer";
//  e1.changeName('Raymond');
//  console.log(e1)

// /*I think that is object literal method */

// var e1 = Object.create(Employee,{
//     name : {value: "William", writable: true}, // the different with constructor method
//     role : {value: "Writer"}
// })
// e1.changeName('Raymond');
// console.log(e1)

/* I think that is object constructor function method */
// function Employee(name,id,salary){
//     this.name = name;
//     this.id = id;
//     this.salary = salary;
// }
// Employee.prototype.post = function(){
//     return (this.name+" "+"is content creator");
// }
// Employee.prototype.changeName = function(name){
//     return (this.name=name);
// }

// var e1 = new Employee('William','007',20000);
// console.log(e1)
// console.log(e1.post());
// console.log(e1.name)
// e1.changeName('Raymond');
// console.log(e1.name)
// console.log(e1)

// /* Now create a new object constructor its prototype inheritance from Employee */
// function Programmer(name,id,salary,language){
//     //protertises Inheritance from the Employee 
//     Employee.call(this,name,id,salary);
//     this.language = language;
// }
// /* This is important 2 parts 
// ============================ */
// // 1.methos Inheritance from the Employee
// Programmer.prototype = Object.create(Employee.prototype)
// // 2.add constructor
// Programmer.prototype.constructor = Programmer;
// // creating a new object

// var e_programmer = new Programmer('Kyaw Myo Swe','006',25000,'JavaScript');
// console.log(e_programmer);
// e_programmer.changeName('mayjuno');
// console.log(e_programmer);
// console.log(e_programmer.post());

/* =====================================
    Classes and inheritance in JavaScript
            Exercise 32:
    classes is introduced in ES6
  ======================================*/

// class Student {
//     constructor(name,age,roll){
//         this.name = name;
//         this.age = age;
//         this.roll = roll;        
//     }
//     // Creating tha method no need any other, only need method name and () eg; chaneName()
//     Org(){
//         return (`I\'m ${this.name} from Mandalay.`);
//     }
//     dob(){
//         return(`The date of birth of ${this.name} is ${2022-this.age}.`);
//     }
//     // creating a static method
//     static add(a,b){
//         return a+b; 
//     }
// }
// // Creating the inheritanced child class
// class ComputerStudent extends Student{
//     constructor(name,age,roll,number_of_subject,language,section){
//         super(name,age,roll);
//         this.number_of_subject = number_of_subject;
//         this.language = language;
//         this.section = section;
//     }
// }
// // creating an object
// var kms = new Student('Kyaw Myo Swe',43,420);
// console.log(kms);
// console.log(kms.dob());
// console.log(kms.Org());
// console.log(Student.add(10,20));

// // creating an object instanceof child class
// var raymond = new ComputerStudent('Raymond',12,420,9,'Python','A');
// console.log(raymond);
// console.log(raymond.dob());
// console.log(raymond.Org());
// console.log(ComputerStudent.add(2022,5));

/* =====================================
    DOM Manipulation in JavaScript part-1
            Exercise 33:
  ======================================*/
//  /* window.prompt() */
//   document.write(`<h3>Window object in JS and DOM manipulation.</h3>`)
//   var x = parseInt(prompt('Enter the value of x :'))
//   var y = parseInt(prompt('Enter the value of y :'))
//   document.write(`x = ${x}<br>`)
//   document.write(`y = ${y}<br>`)
//   document.write(`x + y = ${x+y}<br>`)

///* window.confirm()*/
// var a = confirm("Are you sure?")
// console.log(a) // This return true or false value

// /* window.innerHight /window.inndrWidth */
// var document_height = window.innerHeight;
// var document_width = window.innerWidth;
// console.log(document_height,document_width)

// function button(){
//     //window.alert('You clicked me?')
//     //document.getElementById("heading").innerHTML = "You Clicked the Button!"
//    var message = document.getElementById("heading").innerHTML;
//    window.alert(message);
// }
// //button();

/*======================================
Website layout and DOM in JavaScript 
        Exercise 35:
=======================================*/

