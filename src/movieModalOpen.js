const backdropRef = document.querySelector('[data-modal]');
const movieCardRef = document.querySelectorAll('.movie__card').forEach(item => {
    item.addEventListener('click', onCardClick)
});

export function onCardClick() {    
    backdropRef.classList.remove('is-hidden');
    
}