// // step 1
// function func(friend,inner,my_name){
//     //console.log(`This is call function`)
//     console.log(`My frinds\'s name is ${friend}.`)
//     inner(my_name)

// }

// function innerfunc(name){
//    // console.log(`This is inner function`)
//    console.log(`My name is ${name}.`)

// }

// func("William",innerfunc,"Kyaw Myo Swe");

// /* step 2 */
// function func(my_name,inner,friend){
//     setTimeout(function(){
//         console.log(`My name is ${my_name}.`);
//         inner(friend);
//     },3000)
    
    

// }

// function innerfunc(name){
//    console.log(`My friend\'s name is ${name}.`)
// }

// func("Kyaw Myo Swe",innerfunc,"William");
// var result= 0;
// function precalculation(num1,num2,result_divder){
//     result = num1 + num2;
//     divider(result,result_divder)
// }
// function divider(r,d){
//     var dr =0;
//     dr = r/d;
//    console.log(dr);
//    return dr;
// }

// precalculation(10,20,2);



// function precalculation(num1,num2,result_divder){
//     var postcal=0;
//     setTimeout(function(){
//         let   result = num1 + num2;
//         postcal = divider(result,result_divder) 
//     },3000);
//     return postcal;
// }
// function divider(r,d){
//     dr = r/d;
//     console.log(`dividing is :${dr}`);
// }

// console.log(precalculation(10,20,2));


function mainFunction() {
    function subFunction() {
          var str = "foo";
          return str;
    }
    return subFunction();
}

var test = mainFunction();
console.log(test);