
// Get the modal
var modal = document.getElementById("envyxModal"); // Updated ID to match your modal

// Get the button that opens the modal (assuming you're using a button)
var btn = document.getElementById("myBtn"); // Update this if you're using a different trigger

// No need to get the close button or span element, as Bootstrap handles those automatically

// When the user clicks the button, open the modal
btn.addEventListener("click", function() {
  var myModal = new bootstrap.Modal(modal); // Create a Bootstrap modal instance
  myModal.show(); // Open the modal
});

// Bootstrap handles closing the modal when the user clicks "x" or outside the modal


 //

