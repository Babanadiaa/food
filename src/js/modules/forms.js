import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        succes: 'Дякую!',
        failure: 'щось пішло не так'
    }
    
    forms.forEach(item => {
        bindPostData(item)
    });
    

    
    function bindPostData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
    
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
            form.insertAdjacentElement('afterend', statusMessage)
    
        
    
            const formData = new FormData(form);
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
    
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data)
                showThanksModal(message.succes);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
    
            }).finally(() => {
                form.reset();
            });
    
        })
    
        function showThanksModal(message) {
            const firstModalContent = document.querySelector('.modal__content')
            firstModalContent.classList.add('hide');
    
    
            openModal('.modal', modalTimerId);
    
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal_close" data-modal-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
    
            `;
    
            document.querySelector('.modal').append(thanksModal)
            setTimeout(() => {
                thanksModal.remove();
                firstModalContent.classList.add('hide');
                firstModalContent.classList.add('show');
                firstModalContent.classList.remove('hide');
                firstModalContent.classList.remove('show');
    
    
    
                modalClose('.modal');
    
            }, 4000)
        };
    };
}

export default forms;
