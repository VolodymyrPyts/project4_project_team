
const refs = {
  modal: document.querySelector('.modalTeams'),
  closeBtn: document.querySelector('.modalTeamClose'),
  openModalTeam: document.querySelectorAll('.modalTeamOpen'),
};

// відкритя модалку
refs.openModalTeam.forEach(item => {
  item.addEventListener('click', onOpenModal);
});

// закритя модалку
refs.closeBtn.addEventListener('click', onCloseModal);

// бекдропу закриває модалку
refs.modal.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// Escape закриває модалку
function onEscKeyPress(event) {
  const ESC_KEY = event.code === 'Escape';

  if (ESC_KEY) {
    onCloseModal();
  }
}

// Функція відкриватя модалки.
function onOpenModal() {
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);
  refs.modal.classList.remove('is-hidden');
}

// Функція закритя
function onCloseModal() {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.classList.add('is-hidden');
}
