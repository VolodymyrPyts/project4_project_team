export function modal() {
  const refs = {
    backdrop: document.querySelector('[data-modal]'),
    closeBtn: document.querySelector('[data-modal-close]'),
    openCards: document.querySelectorAll('.movie__card'),
  };

// клік по карткам, відкриває модалку
refs.openCards.forEach(item => {
  item.addEventListener('click', onOpenModal);
});

// клік по кнопці закрити, закриває модалку
refs.closeBtn.addEventListener('click', onCloseModal);

// клік по бекдропу, закриває модалку
refs.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// Тільки при натисканні Escape закривається модалка
function onEscKeyPress(event) {
  const ESC_KEY = event.code === 'Escape';

  if (ESC_KEY) {
    onCloseModal();
  }
}

// Функція відкривання модалки. Якщо модалка відкрита, слухаємо подію
function onOpenModal(e) {
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  
}

// Коли модалка закривається, знімаємо слухача подій
function onCloseModal() {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
}
}
