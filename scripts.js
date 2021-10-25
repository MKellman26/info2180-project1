/* 620118070 */
"use strict";
window.onload = function(){

const submit = document.getElementsByTagName("button");

submit[0].addEventListener("click", validate);

function validate(e){
    e.preventDefault();

    var msg = document.getElementsByClassName("message")[0];

    const emailField = document.getElementsByTagName("input");

    const te =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true;

    if (te.test(String(emailField[0].value))){
        msg.innerHTML = "Thank you! Your email address " + emailField[0].value + " has been added to our mailing list!";
    } else {
        msg.innerHTML = "Please enter a valid email address.";
    }
}
}