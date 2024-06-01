    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('reservationForm');
      const confirmationMessage = document.getElementById('confirmationMessage');
  
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
  
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const date = document.getElementById('date').value;
          const time = document.getElementById('time').value;
  
          confirmationMessage.style.display = 'block';
 
          form.reset();
      });
  });
  