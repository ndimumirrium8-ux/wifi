const connectionForm = document.getElementById("connectionForm");
const message = document.getElementById("message");

connectionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Check whether the fields are empty
    if (name === "" || phone === "") {
        message.textContent = "Please complete all fields.";
        return;
    }

    // Check the phone number format
    const phonePattern = /^07\d{8}$/;

    if (!phonePattern.test(phone)) {
        message.textContent =
            "Please enter a valid demo phone number.";
        return;
    }

    message.textContent = "Connecting to SPHF Wi-Fi...";

    setTimeout(function () {

        // Demonstration of successful connection
        window.location.href = "redirect.html";

    }, 1500);
});