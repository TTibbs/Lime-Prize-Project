const emailInput = document.querySelector('.email-input');
const form = document.querySelector('.enter-draw');

emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.(com|co\.uk)$/i.test(emailValue);

  if (emailValue.length > 0 && validEmail) {
    emailInput.setCustomValidity('');
  } else {
    emailInput.setCustomValidity('Please enter a valid email address (e.g. john@example.com or jane@example.co.uk)');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const link = document.querySelector('.enter-btn').href;
  window.location.href = link;
});

function submitForm() {
  const emailInput = document.querySelector('.email-input');
  const emailValue = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.(com|co\.uk)$/i.test(emailValue);

  if (emailValue.length > 0 && validEmail) {
    const link = 'rickroll.html';
    window.location.href = link;
  } else {
    emailInput.setCustomValidity('Please enter a valid email address (e.g. john@example.com or jane@example.co.uk)');
  }
}