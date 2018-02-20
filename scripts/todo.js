
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
    todos = JSON.parse(str);
    if(!todos){
        todos = [];
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
    $(function() {
        // Inside your success function
        for (item in todos) {
            console.log(item)
            $("#listItems").append("<li>" +
            "<input type='checkbox' id=item>" +
            "<label for=item>"+ todos[item].name + "</label>" + 
            "<p5>" + todos[item].note + "</p5>" +
            "<p5> Posted: " + todos[item].date + "<div class='button2' onClick='removeTodoAtIndex(" + item + ")'>Delete</div></p5>" + 
            "</li>")
        }
        $("#newList").html();
    });
    
    
    
}


getTodos();

$(function() {
    // Inside your success function
    for (item in todos) {
        console.log(item)
        $("#listItems").append("<li>" +
        "<input type='checkbox' id=item>" +
        "<label for=item>"+ todos[item].name + "</label>" + 
        "<p5>" + todos[item].note + "</p5>" +
        "<p5> Posted: " + todos[item].date + "<div class='button2' onClick='removeTodoAtIndex(" + item + ")'>Delete</div></p5>" + 
        "</li>")
    }
    $("#newList").html("#listItems");
});


