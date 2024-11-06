document.getElementById("form").addEventListener("submit", function(event) {
    if (!document.getElementById("agree").checked) {
        event.preventDefault();
        alert("You must accept the Terms and Conditions to proceed.");
    }
});
