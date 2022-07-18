
const markAppRegister = `
<form class="singUp__form-second">
  <label class="firstName">
    First Name
    <input type="text">
  </label>
  <label class="secondName">
    Second Name
    <input type="text">
  </label>
  <label class="img">
    img
    <input class="img" type='file'>
  </label>
  <div class="form-login__box">
    <button class="btn__add" type="submit">
      add
    </button>
  </div>
</form>`;
const registerBtn = document.querySelector(".btn__to-register")
const form = document.querySelector(".form-login")

registerBtn.addEventListener('click', () => {
  form.innerHTML = markAppRegister;
})
export function modalFormLogin()  {
    (() => {
  const refs = {
    openModalBtn: document.querySelector(".btn__form-login"),
    closeModalBtn: document.querySelector(".modal-login__close-btn"),
    modal: document.querySelector(".modal__login"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModalClose);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidd");
    document.body.classList.toggle("bascdrop");
    
  }
  function toggleModalClose() {
    refs.modal.classList.toggle("is-hidd");
    document.body.classList.toggle("bascdrop");
  }
    })();
};