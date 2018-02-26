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
        let $theList = $('<ol>', {"id":"newList"});
        for (item in todos) {
            $theList.append("<li>" +
            "<input type='checkbox' id=item>" +
            "<label for=item>"+ todos[item].name + "</label>" + 
            "<p5> Posted: " + todos[item].postDate + "</p5>" + 
            "<p5> Updated: " + todos[item].mdate + "</p5>" + 
            "<p5> Due: " + todos[item].date + "<div class='button2' onClick='removeTodoAtIndex(" + item + ")'>Delete</div></p5>" + 
            "<div class='button3' onClick='edit(" + item + ")'>Edit</div></p5>"+
            "<label for=item>"+ todos[item].note + "</label>" + 
            "</li>")
        }
        $("#listItems").html($theList);
    });
}

function edit(index){
    document.getElementById('contactForm').style.display = "block";
    document.getElementById('listItems').style.display = "none";
    $('#name').attr('value', todos[index].name);
    $('#message').attr('value', todos[index].note);
    $('#datepicker').attr('value', todos[index].date);

    // Check for LocalStorage support.
    if (localStorage) {
        // localStorage.clear();
        // Add an event listener for form submissions
        document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;
        var note = document.getElementById('message').value;
        var date = document.getElementById('datepicker').value;
        todos[index].name = name;
        todos[index].note = note;
        todos[index].date = date;

        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();

        var mDate = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;

        todos[index].mdate = mDate;
        saveTodos();
    });
    }


}

getTodos();


$(function() {
    // Inside your success function
    let $theList = $('<ol>', {"id":"newList"});
    for (item in todos) {
        $theList.append("<li>" +
        "<input type='checkbox' id=item>" +
        "<label for=item>"+ todos[item].name + "</label>" + 
        "<p5> Posted: " + todos[item].postDate + "</p5>" + 
        "<p5> Updated: " + todos[item].mdate + "</p5>" + 
        "<p5> Due: " + todos[item].date + "<div class='button2' onClick='removeTodoAtIndex(" + item + ")'>Delete</div></p5>" + 
        "<div class='button3' onClick='edit(" + item + ")'>Edit</div></p5>"+
        "<label for=item>"+ todos[item].note + "</label>" + 
        "</li>")
    }
    $("#listItems").html($theList);
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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


