function Print(){
    var x = document.getElementById("uname").value;
    var y = document.getElementById("upass").value;
    if (y == "password"){
        alert("Login Successful!");
    }
    else{
        alert("Wrong Password!");
    }
    window.alert(`Name is ${x}.\nPassword is ${y}.`);
} 