// Show Registration Form
function showRegister() {
    document.getElementById("registerContainer").style.display = "block";
    document.getElementById("loginForm").parentNode.style.display = "none";
}

// Show Login Form
function showLogin() {
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("loginForm").parentNode.style.display = "block";
}

// Handle Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "user@example.com" && password === "123456") {
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to portfolio home page
    } else {
        alert("Invalid email or password.");
    }
});

// Handle Registration
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    alert("Registration Successful!\nName: " + name + "\nEmail: " + email);
    showLogin(); // Switch to login form after registration
});
