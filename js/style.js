
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

function validateForm() {
  // Get references to form elements and error messages
  const nombre = document.getElementById("nombre");
  const nombreHelp = document.getElementById("nombreHelp");
  const email = document.getElementById("email");
  const emailHelp = document.getElementById("emailHelp");
  const termsCheckbox = document.getElementById("exampleCheck1");
  const termsHelp = document.getElementById("termsHelp");

  // Reset error messages initially
  resetError(nombreHelp);
  resetError(emailHelp);
  resetError(termsHelp);

  // Validation checks
  let isValid = true;

  // Check if name is empty
  if (nombre.value.trim() === "") {
    nombreHelp.textContent = "Name is required.";
    isValid = false;
  }

  // Check if email is valid format (basic check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailHelp.textContent = "Invalid email format.";
    isValid = false;
  }

  // Check if terms and conditions are accepted
  if (!termsCheckbox.checked) {
    termsHelp.textContent = "You must accept the terms and conditions.";
    isValid = false;
  }

  return isValid; // Return false to prevent form submission if validation fails
}

function resetError(element) {
  element.textContent = ""; // Clear error message
}
