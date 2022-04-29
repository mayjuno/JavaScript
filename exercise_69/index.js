function cars(value){

    let index =0;
    return {
        // create next prototype object
        next :function(){
            if(index< value.length)
                return{
                    value : value[index++],
                    done: false,
            }
            else{
                return {done:true}
            }
        }
    }
}




let arr = ['BMW', 'Audi', 'Marcedes', 'Honda', 'Toyota']

// /* normal loop */
// for (let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// /* for of loop */
// for (let i of arr){
//     console.log(i);
// }

var newCars = cars(arr);
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())