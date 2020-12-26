function validate() {
    valCheck = true;
    var email_image = getImage(emailCheck(document.forms["contactForm"]["email"].value), "email");
    var phone_image = getImage(phoneCheck(document.forms["contactForm"]["phone"].value), "phone");
    var address_image = getImage(addressCheck(document.forms["contactForm"]["address"].value), "address");
    document.getElementById("Email").appendChild(email_image);
    document.getElementById("Phone").appendChild(phone_image);
    document.getElementById("Address").appendChild(address_image);

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

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}

function phoneCheck(phone) {
    var number = phone;
    if(phone.includes("-")){
        number = phone.replaceAll("-","");
    }
    if (number.length == 10 && numCheck(number)) {
        return true;
    }
    valCheck = false;
    return false;
}

function addressCheck(address){
    atSplit = address.split(',');
    if (atSplit.length == 2 && alphaCheck(atSplit[0])) {
        return true;
    }
    valCheck = false;
    return false;
}
function numCheck(entry){
    let regex = /^[0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        alert("Invalid phone number!! Please try again.")
        return false;
    }
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        alert("Invalid Email address!! Please try again.")
        return false;
    }
}

function alphaCheck(entry){
    let regex = /^[a-z]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        alert("Invalid Address!! Please enter in the format city,state")
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
