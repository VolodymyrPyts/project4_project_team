
const registerBtn = document.querySelector(".btn__to-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form__register");
const modalBackBtn = document.querySelector('.modal-login__back-btn');
const modal = document.querySelector('.modal__login');
const form = document.querySelector(".singUp__form");
const formReg = document.querySelector(".singUp__form-second");



registerBtn.addEventListener('click', () => {
  formLogin.classList.add('oldForm');
  formRegister.classList.add('newForm');
  modalBackBtn.classList.remove('hidden');
  modal.classList.add('newFormJS');
})
export function modalFormLogin() {
  (() => {
    const refs = {
      checkModalBtn: document.querySelector(".btn__form-login-check"),
      openModalBtn: document.querySelector(".btn__form-login"),
      closeModalBtn: document.querySelector(".modal-login__close-btn"),
      modal: document.querySelector(".modal__login"),
      modalBackdrop: document.querySelector(".bacekdrop_box"),
    };
    refs.checkModalBtn.style.display = 'none';
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModalClose);

    function toggleModal() {
      formLogin.classList.remove('oldForm');
      formRegister.classList.remove('newForm');
      modalBackBtn.classList.add('hidden');
      modal.classList.remove('newFormJS');
      refs.modal.classList.toggle("is-hidd");
      refs.modalBackdrop.classList.add("bacekdrop");
    
    }
    function toggleModalClose() {
      formLogin.classList.remove('oldForm');
      formRegister.classList.remove('newForm');
      modalBackBtn.classList.add('hidden');
      modal.classList.remove('newFormJS');
      refs.modal.classList.toggle("is-hidd");
      refs.modalBackdrop.classList.remove("bacekdrop");
    }
      
    })();
  
  
  };

