// script.js

const planButtons = document.querySelectorAll('.plan button');

planButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all plans
    document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('active'));
    // Add active class to the clicked plan
    this.parentElement.classList.add('active');
  });
});
// script.js (continued)

const subscribeButtons = document.querySelectorAll('.plan button');

subscribeButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    // Simulate a basic validation (replace with actual validation logic)
    if (!confirm('Are you sure you want to subscribe to this plan?')) {
      event.preventDefault(); // Prevent default form submission behavior
    }
  });
});
