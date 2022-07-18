import { Loading } from 'notiflix';

function addLoader() {
    //Loading.dots();
    // Loading.arrows();
    //Loading.dots();
    // Loading.pulse();
    Loading.circle({
        svgColor: '#FF001B',
        svgSize: '90px',
    });
}

function removeLoader() {
    setTimeout(() => {
        Loading.remove();
    }, 2000);
}

export { addLoader, removeLoader };