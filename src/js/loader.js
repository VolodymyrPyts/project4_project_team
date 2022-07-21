import { Loading } from 'notiflix';

function addLoader() {  
    Loading.circle({
        svgColor: '#FF001B',
        svgSize: '90px',
        cssAnimation: true
    });
    document.querySelector('body').style.overflow = 'hidden';
}

function removeLoader() {
    setTimeout(() => {
        Loading.remove(); 
        document.querySelector('body').style.overflow = 'visible';   
    }, 300);
}

function initialLoader() {
    addLoader();

    window.addEventListener('load', () => {
        removeLoader();
    });
}

export { addLoader, removeLoader, initialLoader };