function showMessage() {
    alert("Git and GitHub are awesome!");
}

function featureA(){
    console.log("Added some feature A")
}

function featureB(){
    console.log("Adding new feature B")
}

function featureC(){
    console.log("Added a new featureC");
}

// Simple Login Validation Script

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sample credentials
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        alert("Login Successful ✅");
    } else {
        alert("Invalid Username or Password ❌");
    }
}