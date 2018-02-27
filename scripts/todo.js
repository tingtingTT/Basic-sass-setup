$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        maxDate:'+1m +10d',
        minDate: new Date()});
});

function showAll(){
    console.log("clicked");
    document.getElementById("listItems").style.display = "block";
    $("input").removeClass("invisible");
    $("input").siblings().removeClass("invisible");
}

function showComplete(){
    console.log("clicked");
    $("input").removeClass("invisible");
    $("input").siblings().removeClass("invisible");
    $("input:not(:checked)").addClass("invisible");
    $("input:not(:checked)").siblings().addClass("invisible");
}


function showTodo(){
    console.log("clicked");
    $("input").removeClass("invisible");
    $("input").siblings().removeClass("invisible");
    $("input:checked").addClass("invisible");
    $("input:checked").siblings().addClass("invisible");
}

function getTodos(){
    var str = localStorage.getItem("todos");
    console.log("get todo");
    console.log(str);

    todos = JSON.parse(str);
    console.log(todos);
    if(todos.length === 0){
        console.log("todo empty");
        todos = [
            {name: "Laundry", dueDate: "2018-01-03", note: "Friday night do laundry", postDate: "2018-01-01", updateDate: "2018-01-02"},
            {name: "Supermarket", dueDate: "2018-02-03", note: "Get apples", postDate: "2018-02-01", updateDate: "2018-02-02"},
            {name: "Gym", dueDate: "2017-08-03", note: "Cardio", postDate: "2017-08-01", updateDate: "2017-08-02"},
        ];
    }
}

function saveTodos(){
    var str = JSON.stringify(todos);
    localStorage.setItem("todos", str);
}

function removeTodoAtIndex(index){
    console.log(index);
    todos.splice(index, 1);
    saveTodos();
    renderTodo();
}

function edit(index){
    document.getElementById('contactForm').style.display = "block";
    document.getElementById('listItems').style.display = "none";
    $('#name').attr('value', todos[index].name);
    $('#message').attr('value', todos[index].note);
    $('#datepicker').attr('value', todos[index].dueDate);

    // Check for LocalStorage support.
    if (localStorage) {
        // localStorage.clear();
        // Add an event listener for form submissions
        document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var note = document.getElementById('message').value;
        var dueDate = document.getElementById('datepicker').value;
        todos[index].name = name;
        todos[index].note = note;
        todos[index].dueDate = dueDate;

        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();

        var updateDate = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;

        todos[index].updateDate = updateDate;
        saveTodos();
    });
    }
}

getTodos();
renderTodo();


function renderTodo(){
    $(function() {
    // Inside your success function
    let $theList = $('<ol>', {"id":"newList"});
    for (item in todos) {
        $theList.append("<li>" +
        "<input type='checkbox' id=item>" +
        "<label for=item>"+ todos[item].name + "</label>" + 
        "<p5> Posted: " + todos[item].postDate + "</p5>" + 
        "<p5> Updated: " + todos[item].updateDate + "</p5>" + 
        "<p5> Due: " + todos[item].dueDate + "<div class='button2' onClick='removeTodoAtIndex(" + item + ")'>Delete</div></p5>" + 
        "<div class='button3' onClick='edit(" + item + ")'>Edit</div></p5>"+
        "<label for=item>"+ todos[item].note + "</label>" + 
        "</li>")
    }
    $("#listItems").html($theList);
});}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}


function comPostA(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.postDate;
    const bDate = b.postDate;

    let comparison = 0;
    if (aDate > bDate) {
        comparison = 1;
    } else if (aDate < bDate) {
        comparison = -1;
    }
    return comparison;
}

function postA(){
    todos.sort(comPostA);
    renderTodo();

}



function comPostD(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.postDate;
    const bDate = b.postDate;

    let comparison = 0;
    if (aDate < bDate) {
        comparison = 1;
    } else if (aDate > bDate) {
        comparison = -1;
    }
    return comparison;
}

function postD(){
    todos.sort(comPostD);
    renderTodo();
}

function comUpdateA(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.updateDate;
    const bDate = b.updateDate;

    let comparison = 0;
    if (aDate > bDate) {
        comparison = 1;
    } else if (aDate < bDate) {
        comparison = -1;
    }
    return comparison;
}

function updateA(){
    todos.sort(comUpdateA);
    renderTodo();
    window.location = "./todo.html";
}


function comUpdateD(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.updateDate;
    const bDate = b.updateDate;

    let comparison = 0;
    if (aDate < bDate) {
        comparison = 1;
    } else if (aDate > bDate) {
        comparison = -1;
    }
    return comparison;
}

function updateD(){
    todos.sort(comUpdateD);
    renderTodo();
}



function comDueA(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.dueDate;
    const bDate = b.dueDate;

    let comparison = 0;
    if (aDate > bDate) {
        comparison = 1;
    } else if (aDate < bDate) {
        comparison = -1;
    }
    return comparison;
}

function dueA(){
    todos.sort(comDueA);
    renderTodo();
}


function comDueD(a, b) {
    // Use toUpperCase() to ignore character casing
    const aDate = a.dueDate;
    const bDate = b.dueDate;

    let comparison = 0;
    if (aDate < bDate) {
        comparison = 1;
    } else if (aDate > bDate) {
        comparison = -1;
    }
    return comparison;
}

function dueD(){
    todos.sort(comDueD);
    renderTodo();
}


$('.popup').click(function() {
    $(".popup").fadeOut(300);
 });