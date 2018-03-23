//define functions here
function frameIt() {
  $("img").on("load", (e) => $(this).attr("class", "tasty"));
}

frameIt();

$(document).ready(function(){

// call functions here
function getIt() {
  $("p").on("click", (e) => window.alert("Hey!"));
}

getIt();

function pressIt() {

}

function submitIt() {

}
});
