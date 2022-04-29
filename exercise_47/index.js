/* Promises in javascript 
pending is the time in with the system works on the promises
defination : promises is an object with will produce value something.

writing code example;
var promise_value = new Promise(function(resolt,reject){
    condition= trur;
    if(condition){
        resolt();
    }else{
        reject();
    }
});

အခြေအနေတစ်ရပ်ရှိမယ် မှန်ရင် resolt ကိုလုပ်မယ် မှားရင် reject ကိုလုပ်မယ်။
*/

// var prom_val = new Promise(function(resolt,reject){
//     var licine = true;
//     if(licine){
//         resolt("Yes");
//     }else{
//         reject("No");
//     }
// });
// prom_val.then(function(resolt){
//     console.log(`${resolt}, You can do it.`)
// }).catch(function(reject){
//     console.log(`${reject}, You can\'t do it.`);
// });

var functions = function(){
    return new Promise(function(resolt,reject){
        resolt("Learn Function");
    });
};

var callback = function(message){
    return new Promise(function(resolt,reject){
        resolt(`${message} Learn callback function.`);
    });
};

var promise = function(message){
    return new Promise(function(resolt,reject){
        resolt(`${message} Good time to go to lean Promise in JavaScript.`);
    });
};

functions().then(function(result){
    return callback(result);
}).then(function(result){
    return promise(result);
}).then(function(result){
    console.log(`Good to go : ${result}`)
})