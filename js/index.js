// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$.getJSON("https://u0bqxo1avb.execute-api.us-east-1.amazonaws.com/prod/user/123",
	function(data){
		console.log(data);
	}
);

function checkForm(form)
{
  if(!form.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    form.terms.focus();
    return false;
  }
  return true;
}
