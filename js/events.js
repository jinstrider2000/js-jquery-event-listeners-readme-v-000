//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  $("p").on("click", (e) => window.alert("Hey!"));
}

getIt();

function frameIt() {
  $("img").load((e) => $(this).attr("class", "tasty"));
}

frameIt();

function pressIt() {

}

function submitIt() {

}
});
