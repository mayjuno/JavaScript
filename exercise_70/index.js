// function* generat(){
//     let i = 0;
//     yield "BMW";
//     yield "Audi";
//     yield "Marcedes";
//     yield "Honda";
//     yield "Toyota";
// }




// //let arr = ['BMW', 'Audi', 'Marcedes', 'Honda', 'Toyota']

// var cars = generat()
// console.log(cars.next())
// console.log(cars.next())
// console.log(cars.next())
// console.log(cars.next())
// console.log(cars.next())
// console.log(cars.next())


function* generat(){
    let i = 0;
    var  arr = ['BMW', 'Audi', 'Marcedes', 'Honda', 'Toyota']
    while (i<arr.length){
        yield arr[i];
        i++;
    }
}

let cars = generat()
console.log(cars.next().value)
console.log(cars.next().value)
console.log(cars.next().value)
console.log(cars.next().value)
console.log(cars.next().value)
console.log(cars.next().value)