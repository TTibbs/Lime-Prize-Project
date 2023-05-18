function toggleContainer() {
  var container = document.getElementById('copyrightContainer');
  var showBtn = document.getElementById('showBtn');

  if (container.style.display === 'none') {
    container.style.display = 'block';
    showBtn.innerText = 'Close Content';
  } else {
    container.style.display = 'none';
    showBtn.innerText = 'Open Content';
  }
}

function redirectToRickroll(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  window.location.href = 'rickroll.html';
}

// function submitForm() {
//   const emailInput = document.querySelector('.email-input');
//   const emailValue = emailInput.value.trim();
//   const validEmail = /^[^\s@]+@[^\s@]+\.(com|co\.uk)$/i.test(emailValue);

//   if (emailValue.length > 0 && validEmail) {
//     window.location.href = 'rickroll.html';
//   } else {
//     emailInput.setCustomValidity('Please enter a valid email address (e.g. john@example.com or jane@example.co.uk)');
//   }
// }