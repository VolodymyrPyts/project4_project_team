import { Loading } from 'notiflix';

function addLoader() {  
    Loading.circle({
        svgColor: '#FF001B',
        svgSize: '90px',
    });
    document.querySelector('body').style.overflow = 'hidden';
}

function removeLoader() {
    setTimeout(() => {
        Loading.remove(); 
        document.querySelector('body').style.overflow = 'visible';   
    }, 2000);
}

function initialLoader() {
    addLoader();

    window.addEventListener('load', () => {
        removeLoader();
    });
}

export { addLoader, removeLoader, initialLoader };