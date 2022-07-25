export function fonNightDay() {

    const nightBtn = document.querySelector(".bgr__btn-moon");
    const daytBtn = document.querySelector(".bgr__btn-sun");
    let savedSettings = localStorage.getItem("state");
    let parsedSettings = JSON.parse(savedSettings);
    let clas = document.body.className;
    if (parsedSettings === null) {
        document.body.classList.add('bgr_day')
    };

    nightBtn.addEventListener('click', () => {
        nightBtn.style.display = 'none';
        daytBtn.style.display = 'block';
        daytBtn.removeAttribute('disabled');
        nightBtn.setAttribute('disabled', true);
        
        document.body.classList.remove('bgr_day');
        document.body.classList.add('bgr_night');
        clas = document.body.className;

        localStorage.setItem("state", JSON.stringify(clas));
    });
    daytBtn.addEventListener('click', () => {
        daytBtn.style.display = 'none';
        nightBtn.style.display = 'block';
        nightBtn.removeAttribute('disabled');
        daytBtn.setAttribute('disabled', true);

        document.body.classList.remove('bgr_night'); 
        document.body.classList.add('bgr_day');
        clas = document.body.className;

        localStorage.setItem("state", JSON.stringify(clas));
    });
    clas = document.body.className;
    if (parsedSettings === null) {
    } else {
        document.body.classList.add(parsedSettings);
    }
    clas = document.body.className;
    if (clas === 'bgr_night') {
        nightBtn.style.display = 'none';
    };
    clas = document.body.className;
    if (clas === 'bgr_day') {
        
        daytBtn.style.display = 'none';
    };
    
}

