function validate() {
    valCheck = true;
    var firstname_check = alphaNumCheck(document.forms["contactForm"]["firstname"].value);
    var lastname_check = alphaNumCheck(document.forms["contactForm"]["lastname"].value);
    var gender_check = dropdownCheck(document.forms["contactForm"]["gender"].value);
    var state_check = dropdownCheck(document.forms["contactForm"]["state"].value);

    var firstname_image = getImage(firstname_check, "firstname");
    var lastname_image = getImage(lastname_check, "lastname");
    var gender_image = getImage(gender_check, "gender");
    var state_image = getImage(state_check, "state");
    document.getElementById("Firstname").appendChild(firstname_image);
    document.getElementById("Lastname").appendChild(lastname_image);
    document.getElementById("Gender").appendChild(gender_image);
    document.getElementById("State").appendChild(state_image);

    if(firstname_check && lastname_check && gender_check && state_check){
        window.location.replace("./validation2.html");
    }

}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function dropdownCheck(value){
    if(value == "select"){
        alert("You selected an invalid option in your Gender or State")
        return false;
    }else{
        return true;
    }
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        alert("You first name or last name does contains characters other than letters and numbers")
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
