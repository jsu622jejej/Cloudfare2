const iconButtons = document.querySelectorAll('.icon-button');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const clickSound = document.getElementById('click-sound');

iconButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = button.getAttribute('data-image');
    clickSound.play();
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  clickSound.play();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    clickSound.play();
  }
});