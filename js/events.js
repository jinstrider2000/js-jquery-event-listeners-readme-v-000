//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  $("p").on("click", (e) => window.alert("Hey!"));
}

getIt();

function frameIt() {
  $("img").on("load", (e) => window.alert("I'm loaded!"));
}

frameIt();

function pressIt() {

}

function submitIt() {

}
});
