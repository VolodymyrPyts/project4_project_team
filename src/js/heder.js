
export const pageSwitcher = dv => {
    const home = document.querySelector(".home-js")
    home.addEventListener('click', homes)
    function homes () {
        console.log(home)
    }
}