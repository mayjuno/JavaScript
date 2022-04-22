document.write('<h2>JavaScript Area</h2>');
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
    Objects in JavaScript
        Exercise 24:
 ===============================*/
 