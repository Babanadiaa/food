function modalClose (modalSelector) {  
  const modalWindow = document.querySelector(modalSelector);
  // modalWindow.classList.add('hide');
  // modalWindow.classList.remove('show');

  modalWindow.style.display = 'none';
  document.body.style.overflow = ''
}

function openModal(modalSelector, modalTimerId) {
  const modalWindow = document.querySelector(modalSelector);

  // modalWindow.classList.add('show');
  // modalWindow.classList.remove('hide');

  modalWindow.style.display = 'block';
  document.body.style.overflow = 'hidden'
  
  if (modalTimerId) {
  clearInterval(modalTimerId)
  }
}


function modal(triggerSelector, modalSelector, modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
    modalWindow = document.querySelector(modalSelector);


    modalTrigger.forEach(element => {
      element.addEventListener('click', () => openModal(modalSelector, modalTimerId))
});


modalWindow.addEventListener('click', (e) => {
  if(e.target === modalWindow || e.target.getAttribute('data-modal-close') == ''){
      modalClose(modalSelector);
  }
})

document.addEventListener('keydown', (e) => {
  if(e.code === 'Escape' && modalWindow.classList.contains('show')){
      modalClose(modalSelector)
  }
})
 
function showModalByScroll() {
  if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal(modalSelector, modalTimerId)
      window.removeEventListener('scroll', showModalByScroll)
  }
}

window.addEventListener('scroll', showModalByScroll)



}

export default modal;
export {modalClose};
export {openModal};

