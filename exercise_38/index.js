function Print(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    if (male.checked == true){
        alert(`Oprtion selected is ${male.value}`);
    }
    else if (female.checked == true){
        alert(`Oprtion selected is ${female.value}`);
    }
    else if (other.checked == true){
        alert(`Oprtion selected is ${other.value}`);
    }
    else{
        alert(`No Option is selected`);
    }
} 