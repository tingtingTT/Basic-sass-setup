$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        maxDate:'+1m +10d',
        minDate: new Date()});
});

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

getTodos();

window.onload = function() {
    // Check for LocalStorage support.
    if (localStorage) {
        // localStorage.clear();
        // Add an event listener for form submissions
        document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var date = document.getElementById('datepicker').value;
        var note = document.getElementById('message').value;
        // Save the name in localStorage.
        addNewTodo(name, date, note);
    });
    }
}



