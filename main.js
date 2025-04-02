//LOGIC STEPS
//Step 1: Listen for submit button click and capture email input.
//Step 2: Check is the email is valid using a validation method.
//Step 3: If the email is invalid, display the error message and style the input with an error state.
//Step 4: If the email is valid, hide form display success message.
//Step 5: Add functionality to the dismiss button to reset the form.

//Select DOM Elements
const signUpForm = document.querySelector('.js-signup-form');
const emailInput = document.querySelector('.js-email-input');
const submitButton = document.querySelector('.js-submit-button');
const errorMessage = document.querySelector('.js-error-message');
const newsLetterCard = document.querySelector('.js-card');
const successCard = document.querySelector('.js-success-card');
const dismissButton = document.querySelector('.js-dismiss-button');

//Add event listener to form
signUpForm.addEventListener('submit', function (event) {
  // Prevent the form from submitting to a server
  event.preventDefault();

  //Get the email value from teh input
  const email = emailInput.value.trim();
  console.log('Email entered:', email);

  // Step 2: validate the email
  const isValidEmail = validateEmail(email);

  if(isValidEmail) {
    console.log('Email is valid!');
    newsLetterCard.classList.add('card-hidden');
    successCard.classList.remove('success-hidden');
    emailInput.value = '';
    const emailSpan = document.querySelector('.js-email-span');
    emailSpan.textContent = email;
  } else {
    console.log('Email is invalid!');
    errorMessage.classList.remove('error-hidden');
    emailInput.classList.add('error-email-input');
  }
});

//Function to validate email
function validateEmail(email) {
  // Basic regex: checks for something@something.something
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email) && email !== ''; // Also ensure it's not empty
}

//Implement step 5
//Event listener for dismiss button
dismissButton.addEventListener('click', () => {
  newsLetterCard.classList.remove('card-hidden');
  successCard.classList.add('success-hidden');
});


