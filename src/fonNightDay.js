export function fonNightDay() {

    const nightBtn = document.querySelector(".bgr__btn-moon");
    const daytBtn = document.querySelector(".bgr__btn-sun");
    

    nightBtn.addEventListener('click', () => {
        nightBtn.style.display = 'none';
        daytBtn.style.display = 'block';
        daytBtn.removeAttribute('disabled');
        nightBtn.setAttribute('disabled', true);

        document.body.classList.remove('bgr_day');
        document.body.classList.add('bgr_night');
        const clas = document.body.className;

        localStorage.setItem("state", JSON.stringify(clas));
    });
    daytBtn.addEventListener('click', () => {
        daytBtn.style.display = 'none';
        nightBtn.style.display = 'block';
        nightBtn.removeAttribute('disabled');
        daytBtn.setAttribute('disabled', true);

        document.body.classList.remove('bgr_night'); 
        document.body.classList.add('bgr_day');
        const clas = document.body.className;

        localStorage.setItem("state", JSON.stringify(clas));
    });
    let savedSettings = localStorage.getItem("state");
    let parsedSettings = JSON.parse(savedSettings);
    document.body.classList.add(parsedSettings);
    if (parsedSettings === 'bgr_night') {
        nightBtn.style.display = 'none';
    };
    if (parsedSettings === 'bgr_day') {
        
        daytBtn.style.display = 'none';
    };
    
}

