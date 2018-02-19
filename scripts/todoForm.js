$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        maxDate:'+1m +10d',
        minDate: new Date()});
});


window.onload = function() {
    // submit redirect
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        window.location = "./todo.html";
    }, false);

    // Check for LocalStorage support.
    if (localStorage) {
        // Add an event listener for form submissions
        document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var date = document.getElementById('datepicker').value;
        var note = document.getElementById('message').value;
        // Save the name in localStorage.
        localStorage.setItem('name', name);
        localStorage.setItem('date', date);
        localStorage.setItem('note', note);
    });
    }
}

