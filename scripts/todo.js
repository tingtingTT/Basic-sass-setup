// function openNav() {
//     document.getElementById("sideNavigation").style.width = "350px";
//     document.getElementById("main").style.marginLeft = "350px";
// }
 
// function closeNav() {
//     document.getElementById("sideNavigation").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }

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

var name = localStorage.getItem('name');
console.log(name);