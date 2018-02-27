$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        maxDate:'+1m +10d',
        minDate: new Date()});
});

function Todo(name, dueDate, note, postDate, updateDate){
    this.name = name;
    this.dueDate = dueDate;
    this.note = note;
    this.postDate = postDate;
    this.updateDate = updateDate;
}

function addNewTodo(name, dueDate, note, postDate, updateDate){
    var t = new Todo(name, dueDate, note, postDate, updateDate);
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

    if(todos.length == 0){
        console.log("todo empty");

        todos = [
            {name: "Laundry", dueDate: "2018-01-03", note: "Friday night do laundry", postDate: "2018-01-01", updateDate: "2018-01-02"},
            {name: "Supermarket", dueDate: "2018-02-03", note: "Get apples", postDate: "2018-02-01", updateDate: "2018-02-02"},
            {name: "Gym", dueDate: "2017-08-03", note: "Cardio", postDate: "2017-08-01", updateDate: "2017-08-02"},
        ];
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
        var dueDate = document.getElementById('datepicker').value;
        var note = document.getElementById('message').value;
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var postDate = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;

        // Save the name in localStorage.
        addNewTodo(name, dueDate, note, postDate, postDate);
    });
    }
}



