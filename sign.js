

document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();


        // Check fields

        if (username === "" || password === "") {

            alert("Please enter your username and password.");

            return;
        }


        // Temporary login

        alert("Sign In successful!");


        // Redirect to home page

        window.location.href = "index.html";

    });




document
    .querySelector(".google-btn")
    .addEventListener("click", function () {

        alert("Google Sign In will be added later.");

    });