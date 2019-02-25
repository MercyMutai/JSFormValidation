// REGISTRATION VALIDATION
function registerValidate() {
    if (!checkNames()) return false
    if (!checkRegistrationNumber()) return false
    if (!checkUserEmailAddress()) return false
    if (!checkSelectors()) return false
    if (!checkPasswordsAndIfTheyMatch()) return false

    alert("Passed")
}


function checkNames() {

    let nameInputs = Array.of(document.forms.register.fname, document.forms.register.lname);

    for (let i = 0; i < nameInputs.length; i++) {
        const target = nameInputs[i];

        let val = target.value.trim()
        let regex = /[a-zA-Z]{3,20}/

        if (!regex.test(val)) {
            alert("Name Validation Failed")
            target.value = ""
            target.focus()
            return false;
        }
    }

    return true;

}

function checkRegistrationNumber() {
    let target = document.forms.register.regno;

    let regex = new RegExp('IN[P]?[\\d]{2}/[\\d]{5}/[\\d]{2}')

    if (!regex.test(target.value.trim())) {
        alert("Regestration Number Validation Failed")
        target.focus()
        return false
    }
    return true
}

function checkUserEmailAddress() {
    let target = document.forms.register.email;

    let regex = new RegExp('[\\w\.]{3,}@[a-zA-Z]+\.[a-zA-Z\.]{3,5}')

    if (!regex.test(target.value.trim())) {
        alert("Invalid Email")
        target.focus()
        return false
    }
    return true
}


function checkSelectors() {
    let selectors = Array.of(document.forms.register.faculty, document.forms.register.dept, document.forms.register.course)
    if (selectors.some(select => select.value.trim().length == 0)) {
        alert("Select an option in the selectables")
        return false
    }

    return true
}

function checkPasswordsAndIfTheyMatch() {

    let pwd = document.forms.register.pwd.value.trim()
    let cpwd = document.forms.register.cpwd.value.trim()

    if (pwd.length == 0) {
        alert("Fill In the passwords")
        return false
    }

    if (pwd != cpwd) {
        alert("The passwords do not match")
        return false;
    }

    return true;

}


// LOGIN VALIDATION

function matchPassword() {

    let target = document.forms.login.pwd;

    if (target.value.trim().length == 0) {
        alert("Fill in the password")
        target.focus()
        return false
    }
    return true

}

function checkLoginRegNumber() {
    let target = document.forms.login.regno;

    let regex = new RegExp('IN[P]?[\\d]{2}/[\\d]{5}/[\\d]{2}')

    if (!regex.test(target.value.trim())) {
        alert("Regestration Number Validation Failed")
        target.focus()
        return false
    }

    return true
}

function loginValidate() {

    if (!checkLoginRegNumber()) return false
    if (!matchPassword()) return false

    return true;

}
