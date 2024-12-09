function register() {
    const username = document.querySelector("#register-username").value;
    const password = document.querySelector("#register-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;


    if (!username || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
        return false;
    }

    const newUser = {
        username: username,
        password: password,
    };
    localStorage.setItem(username, JSON.stringify(newUser));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
    return false;
}
