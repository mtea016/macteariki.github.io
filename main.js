var clear = document.getElementById('clear');
var contactBtn = document.getElementById('contact-btn');
var modalContainer = document.getElementById('modal-container');
var body = document.getElementById('body');

function closeModal() {
  modalContainer.className = 'connect-modal-container no-display';
  modalContainer.style.opacity = '0';
}

contactBtn.onclick = function() {
  if(modalContainer.className = "no-display") {
    modalContainer.className = 'connect-modal-container display';
    modalContainer.style.opacity = '1';
  }
}

clear.style.display = 'none';
