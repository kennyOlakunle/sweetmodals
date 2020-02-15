let modalTop = document.getElementById('modal-top');
let modalRight = document.getElementById('modal-right');
let modalLeft = document.getElementById('modal-left');

modalTop.addEventListener('click', () => {
  document.querySelector('#top-modal').style.display = 'flex';
});

modalRight.addEventListener('click', () => {
  document.querySelector('#right-modal').style.display = 'flex';
});

modalLeft.addEventListener('click', () => {
  document.querySelector('#left-modal').style.display = 'flex';
});
