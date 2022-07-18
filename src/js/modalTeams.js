(() => {
    const refs = {
      openModalBtn: document.querySelector(".modalTeamOpen"),
       closeModalBtn: document.querySelector(".modalTeamClose"),
      modal: document.querySelector(".modalTeams"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
        console.log(1)
      refs.modal.classList.toggle("is-hidden");
    }
  })();