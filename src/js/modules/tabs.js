function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeCLass) {
    
const tabs = document.querySelectorAll(tabsSelector);
const tabsContent = document.querySelectorAll(tabsContentSelector)
const tabsParent = document.querySelector(tabsParentSelector);

function hideTabContent (){
    tabsContent.forEach(element => {
        element.style.display = 'none'
    });

    tabs.forEach(element => {
        element.classList.remove(activeCLass)
    });
}

function showTabContent (i = 0){
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add(activeCLass)

}

tabsParent.addEventListener('click', e => {

    const target = e.target;
    
    if(target && target.classList.contains(tabsSelector.slice(1))){
        tabs.forEach((element, i) => {
            if (target == element) {
                hideTabContent()
                showTabContent(i)
            };
        });
    };
});

hideTabContent()
showTabContent()

}

export default tabs;