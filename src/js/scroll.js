export const scrollBtn =document.querySelector(".isShowBtn");

window.onscroll=() => {
if(window.scrollY > 300){
    scrollBtn.classList.remove('isShowBtn_hide');
}else{
    scrollBtn.classList.add('isShowBtn_hide');
};
scrollBtn.onclick = ()=> {
    window.scrollTo(0,0);
}


}