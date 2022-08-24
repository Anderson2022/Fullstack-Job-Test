

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className ="sign-in-js";
});

btnSignup.addEventListener("click", function(){
    body.className = "sign-up-js";
}
);

function  logar (){
var login = document.getElementById('login').value;
var Password = document.getElementById('Password').value;

if(login == "admin" && == "admin"){
    location.href = "formula.html";
}else{
alert('Usuario e senha incorretos')
}
}