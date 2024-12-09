const inputUsername = document.querySelector("#login-username");
const inputPassword = document.querySelector("#login-password");

function login() {
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Please enter both username and password.");
        return false;
    }

    const user = JSON.parse(localStorage.getItem(inputUsername.value));


    if (!user) {
        alert("No account found. Please register first.");
        return false;
    }


    if (user.password === inputPassword.value) {
        alert("Login successful!");
        window.location.href = "nuochoa.html"; 
        return false; 
    } else {
        alert("Invalid username or password!");
        pass.vale =""
        return false;
    }
}
