function formValidate() {
    let valEmail = document.forms["submitForm"]["email"].value;
    if (valEmail.length < 5) {
        alert("Please enter a valid email");
        return false;
    }
}