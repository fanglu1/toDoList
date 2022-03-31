// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Submit
var txtVal = document.getElementById("txtVal").value;
var listN = document.getElementById("list");

function addLi() {
  var liN = document.createElement("li");
  var txtN = document.getElementById("txtVal");
  liN.innerText = txtN.value;
  listN.appendChild(liN);
  // remove text after clicking
  txtN.value = "";
}

listN.addEventListener('click', function(e){
    var tdItem = e.target;
    tdItem.remove();
})


