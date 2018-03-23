//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  $("p").on("click", (e) => window.alert("Hey!"));
}

getIt();

function frameIt() {
  $("img").on("load", (e) => $("img").attr("class", "tasty"));
}

frameIt();

function pressIt() {

}

function submitIt() {

}
});
