$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        maxDate:'+1m +10d',
        minDate: new Date()});
});

var todos = [];

// function submitClicked(){
//     console.log("clicked")
//     var name = document.getElementById('name').value;
//     var date = document.getElementById('datepicker').value;
//     var note = document.getElementById('message').value;
//     // Save the name in localStorage.
//     var todo = {name: name, date: date, note: note};
//     todos.push(todo);
// }




function Todo(name, date, note){
    this.name = name;
    this.date = date;
    this.note = note;
}

function addNewTodo(name, date, note){
    var t = new Todo(name, date, note);
    todos.push(t);
    saveTodos();
}

function saveTodos(){
    var str = JSON.stringify(todos);
    localStorage.setItem("todos", str);
}

function getTodos(){
    var str = localStorage.getItem("todos");
    todos = JSON.parse(str);
    if(!todos){
        todos = [];
    }
}

window.onload = function() {
    // submit redirect
    // var submitButton = document.getElementById('submitButton');
    // submitButton.addEventListener("click", function(event){
    //     event.preventDefault();
    //     window.location = "./todo.html";
    // }, false);

    // Check for LocalStorage support.
    if (localStorage) {
        // Add an event listener for form submissions
        document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var date = document.getElementById('datepicker').value;
        var note = document.getElementById('message').value;
        // Save the name in localStorage.
        var todo = {name: name, date: date, note: note};
        todos.push(todo);
        // addNewTodo(name, date, note);
    });
    }
}

