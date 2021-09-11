
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
    const lowerCaser = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const number= /[0-9]/g;
    const specialChar = /[^a-zA-Z\d]/g;
    if(!(lowerCaser.test(password))) {
        return "Password must contain atleast one lowercase alphabet";
    }
    if(!(upperCase.test(password))) {
        return "Password must contain atleast one uppercase albhabet";

    }
    if(!(number.test(password))) {
        return "Password must contain a number";
    }
    if(!(specialChar.test(password))) {
        return "Password must contain a character";
    }
    if(password.lengh < 8) {
        return "Password must contains 8 characters";
    }
    return "";

}

export function validateConfirmPassword(password, confirmpassword) {
    if(password === confirmpassword) {
        return true;
    }
    return false;
}

export function validateUsername(username) {
  //  const name = /^[a-zA-Z]+ [a-zA-Z]+[0-9]$/;
  const name = /^[a-zA-Z0-9-_]+$/;
    if (name.test(username)) {
        return true;
    }
    return false;
}