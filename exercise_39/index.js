function Selected(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    var fovorite_idol = document.getElementById("one");
    if (male.checked == true){
        alert(`Oprtion selected is ${male.value}
        Your favorite is ${fovorite_idol.options[fovorite_idol.selectedIndex].value}`);
    }
    else if (female.checked == true){
        alert(`Oprtion selected is ${female.value}
        Your favorite is ${fovorite_idol.options[fovorite_idol.selectedIndex].value}`);
    }
    else if (other.checked == true){
        alert(`Oprtion selected is ${other.value}
        Your favorite is ${fovorite_idol.options[fovorite_idol.selectedIndex].value}`);
    }
    else {
        alert(`No Option is selected Your favorite is ${fovorite_idol.options[fovorite_idol.selectedIndex].value}`);
    }
} 