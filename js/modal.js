(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModalClose);
  //
  function toggleModalOpen() {
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', clickOnEsc);
    refs.modal.addEventListener('click', clickOnBackdrop);
  }
  function toggleModalClose() {
    refs.modal.classList.toggle('is-hidden');
  }
  function clickOnEsc(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      window.removeEventListener('keydown', clickOnEsc);
    }
  }
  function clickOnBackdrop(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
      refs.modal.removeEventListener('click', clickOnBackdrop);
    }
  }
})();
