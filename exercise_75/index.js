/* Normal Destructuring */

// var student1, student2, student3;
// [student1,student2,student3,...student4] =['Johne','Raymond','William','Jinny','Lisa'];
// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)
// console.log(student4[0])


/* Array Destructuring*/

// const colors =['Red','Green','Black','Blue', 'Yello','Pink'];
// [BMW,Marcedes,Audi,Honda,...Toyota] = colors;
// console.log(BMW)
// console.log(Marcedes)
// console.log(Audi)
// console.log(Honda)
// console.log(Toyota)

/* Destructuring and swaping */

// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a)
// console.log(b)

/* Destructuring the object*/
const cars = {
    company : 'BMW',
    colour :'Black',
    model : 2022,
    price: 2000000,
    drive: function(){
        console.log('4WD driving mode.')
        return 0;
    }
}
const{company,colour,model,price,drive} =cars;
console.log(company)
console.log(price)
console.log(drive())
drive();