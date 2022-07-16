export function fonNightDay() {

    const nightBtn = document.querySelector(".bgr__btn-moon");
    const daytBtn = document.querySelector(".bgr__btn-sun");
    

    nightBtn.addEventListener('click', () => {
        daytBtn.removeAttribute('disabled');
        nightBtn.setAttribute('disabled', true);

        document.body.classList.remove('bgr_day');
        document.body.classList.add('bgr_night');
        let clas = document.body.className;


        sessionStorage.setItem("state", JSON.stringify(clas));
    });
    daytBtn.addEventListener('click', () => {
        nightBtn.removeAttribute('disabled');
        daytBtn.setAttribute('disabled', true);

        document.body.classList.remove('bgr_night'); 
        document.body.classList.add('bgr_day');
        let clas = document.body.className;

        sessionStorage.setItem("state", JSON.stringify(clas));
            
    });
    let savedSettings = sessionStorage.getItem("state");
    let parsedSettings = JSON.parse(savedSettings);
    console.log(parsedSettings)
    document.body.classList.add(parsedSettings);
}

