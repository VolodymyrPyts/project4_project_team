export function modalFormLogin()  {
    (() => {
  const refs = {
    openModalBtn: document.querySelector(".btn__form-login"),
    closeModalBtn: document.querySelector(".modal-login__close-btn"),
    modal: document.querySelector(".modal__login"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("is-hidd");
      document.body.classList.toggle("bascdrop");
  }
})();
};