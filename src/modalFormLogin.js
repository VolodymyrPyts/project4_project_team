
const registerBtn = document.querySelector(".btn__to-register")
const formLogin = document.querySelector(".form-login")
const formRegister = document.querySelector(".form__register")

registerBtn.addEventListener('click', () => {
  formLogin.style.display = 'none';
  formRegister.style.display = 'block';
})
export function modalFormLogin()  {
    (() => {
  const refs = {
    openModalBtn: document.querySelector(".btn__form-login"),
    closeModalBtn: document.querySelector(".modal-login__close-btn"),
    modal: document.querySelector(".modal__login"),
    modalBackdrop: document.querySelector(".bacekdrop_box"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModalClose);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidd");
    refs.modalBackdrop.classList.add("bacekdrop");
    
  }
      function toggleModalClose() {
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
    refs.modal.classList.toggle("is-hidd");
    refs.modalBackdrop.classList.remove("bacekdrop");
  }
    })();
};