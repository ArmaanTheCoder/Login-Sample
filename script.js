const LoginPage = document.getElementById("LoginPage");
const SignUpPage = document.getElementById("SignUpPage");
const LoggedIn = document.getElementById("LoggedIn");
const SignedIn = document.getElementById("SignedIn");
const goToSign = document.getElementById("goToSign");
const goToLogin = document.getElementById("goToLogin");
const goToLoginA = document.getElementById("goToLoginA");


const Username = document.getElementById("myUsername");
const Username1 = document.getElementById("myUsername1");
const Password = document.getElementById("myPassword");
const Password1 = document.getElementById("myPassword1");
const Login = document.getElementById("myLogin");
const SignUp = document.getElementById("mySignUp");
Username.value = "";
Username1.value = "";
Password.value = "";
Password1.value = "";
let usernameData = Username.value;
let usernameData1 = Username1.value;
let PasswordData = Password.value;
let PasswordData1 = Password1.value;


Login.onclick = function () {
    usernameData = Username.value;
    PasswordData = Password.value;
    Username.placeholder = "Username";
    Username.classList.remove("red");
    Password.placeholder = "Password";
    Password.classList.remove("red");
    console.log("Username = " + usernameData);
    console.log("Password = " + PasswordData);
    if (usernameData != "" && PasswordData != "") {
        LoginPage.classList.add("hidden");
        LoggedIn.classList.remove("hidden");
    }
    else if (usernameData == "" && PasswordData != "") {
        Username.placeholder = "Please enter your Email / Username !";
        Username.classList.add("red");
    }
    else if (usernameData != "" && PasswordData == "") {
        Password.placeholder = "Please enter your Password !";
        Password.classList.add("red");
    }
    else if (usernameData == "" && PasswordData == "") {
        Username.classList.add("red");
        Password.classList.add("red");
        Username.placeholder = "Please enter your Email / Username !";
        Password.placeholder = "Please enter your Password !";
    }
}

goToSign.onclick = function () {
    Username.value = "";
    Password.value = "";
    LoginPage.classList.add("hidden");
    SignUpPage.classList.remove("hidden");
}

goToLogin.onclick = function () {
    Username1.value = "";
    Password1.value = "";
    LoginPage.classList.remove("hidden");
    SignUpPage.classList.add("hidden");
}

SignUp.onclick = function () {
    usernameData1 = Username1.value;
    PasswordData1 = Password1.value;
    Username1.placeholder = "Username";
    Username1.classList.remove("red");
    Password1.placeholder = "Password";
    Password1.classList.remove("red");
    console.log("Username = " + usernameData1);
    console.log("Password = " + PasswordData1);
    if (usernameData1 != "" && PasswordData1 != "") {
        SignUpPage.classList.add("hidden");
        SignedIn.classList.remove("hidden");
    }
    else if (usernameData1 == "" && PasswordData1 != "") {
        Username1.placeholder = "Please enter your Email / Username !";
        Username1.classList.add("red");
    }
    else if (usernameData1 != "" && PasswordData1 == "") {
        Password1.placeholder = "Please enter your Password !";
        Password1.classList.add("red");
    }
    else if (usernameData1 == "" && PasswordData1 == "") {
        Username1.classList.add("red");
        Password1.classList.add("red");
        Username1.placeholder = "Please enter your Email / Username !";
        Password1.placeholder = "Please enter your Password !";
    }
}

goToLoginA.onclick = function () {
    Username1.value = "";
    Password1.value = "";
    Username.value = "";
    Password.value = "";
    LoginPage.classList.remove("hidden");
    SignedIn.classList.add("hidden");
}