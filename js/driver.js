

$(document).ready(function(){
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

$("#add1").click(function(){
alert("Không có dịch vụ");
});

//button click show menu
$("#bt").click(function(){
$(".menuHide").toggle();
});
//get name folder
$("#folder").click(function(){
	var txt;
  var name = prompt("Please enter folder name:", "input in here");
  if (name == null || name == "") {
    txt = "User cancelled the prompt.";
    alert(txt);
  } else {
    txt =  name ;
    window.location.href = "create?name="+txt;
  }
  
});
/// menu mouse
window.addEventListener("contextmenu",function(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active");
});






});
