function Selected(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    var fovorite_idol = document.getElementById("one");
    var imgtag = document.getElementsByTagName("img");
    for(var i=0; i<imgtag.length; i++){
        if('img-'+fovorite_idol.options[fovorite_idol.selectedIndex].value ==imgtag[i].id){
           console.log(imgtag[i].id);
           imgtag[i].style.borderImageWidth = "2px";
           imgtag[i].style.borderColor= "Orange"; 
           imgtag[i].style.borderStyle = "Solid";
        }
        
    }
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