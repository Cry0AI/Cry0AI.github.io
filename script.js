// Get parent email 
let email = 'anonymous';

try {
  email = window.parent.document.getElementById('to').value;
} catch (e) {
  // Do nothing  
}

let discountGenerated = false;

const text = document.getElementById('text');
const button = document.getElementById('button');

button.addEventListener('click', () => {

  // Generate discount  
  let discount = Math.floor(Math.random() * 10 + 5) * 10;
  
  if(discount > 100) {
    discount = 100;
  }

  // Rest of logic
  // Log data
  fetch('/data.txt', {
    method: 'POST',
    body: `${email}, ${discount}%` 
  });

  // Update UI
  text.classList.remove('disabled');
  text.innerText = `Your Discount: ${discount}%`;
  text.style.fontSize = '24px';
  text.style.fontWeight = 'bold';
  
  // Prevent re-clicks
  discountGenerated = true;
  button.disabled = true;

});