document.getElementById("form").addEventListener("submit", function(event) {
    if (!document.getElementById("agree").checked) {
        event.preventDefault(); 
        alert("You must accept the Terms and Conditions to proceed.");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const inputs = document.querySelectorAll("input, select, textarea");

        inputs.forEach(input => {
            input.addEventListener("focusin", (event) => {
                event.target.style.backgroundColor = "#EEEEEE"; 
            });
        
            input.addEventListener("focusout", (event) => {
                event.target.style.backgroundColor = "#DCDCDC";
            });
        });
    });
