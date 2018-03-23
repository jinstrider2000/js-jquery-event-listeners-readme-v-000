//define functions here
function getIt() {
  $("p").on("click", (e) => window.alert("Hey!"));
}

function frameIt() {
  $("img").on("click", (e) => $(this).attr("class", "tasty"));
  // $("img").attr("class", "tasty");
}

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
