import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile,
} from 'firebase/auth';
import Notiflix, { Notify }from 'notiflix'

const firebaseConfig = {
    apiKey: "AIzaSyAxvy-kRmO18p88DbRL6ba9fTyATtzOT8U",
    authDomain: "filmoteka-2e504.firebaseapp.com",
    projectId: "filmoteka-2e504",
    storageBucket: "filmoteka-2e504.appspot.com",
    messagingSenderId: "311618596259",
    appId: "1:311618596259:web:2f33e73ca3143963f63e16",
    measurementId: "G-1VPD45H77P",
    storageBucket: 'gs://filmoteka-2e504.appspot.com',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.querySelector('.form-login');
const singInForm = document.querySelector('.singUp__form');
const registrationForm = document.querySelector('.form__register');
const modalLogin = document.querySelector('.modal__login');
const beginLoginBtn = document.querySelector('.btn__form-login');
const logOutBtn = document.querySelector('.logOut__btn');
const backDrop = document.querySelector('.bacekdrop_box');
const formBackBtn = document.querySelector('.modal-login__back-btn');


onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
        beginLoginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');
  } else {
  }
});

singInForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = singInForm.elements.email.value;
    const password = singInForm.elements.text.value;

    onSingIn(email, password, singInForm);
});


registrationForm.addEventListener('submit',  e => { 
    e.preventDefault();
    const fullName = registrationForm.elements.firstName.value + " " + registrationForm.elements.secondName.value;
    const email = registrationForm.elements.reg_email.value;
    const password = registrationForm.elements.reg_password.value;
    const passwordRepeat = registrationForm.elements.register_check.value;

    if (password === passwordRepeat) {
        onRegistration(email, password, fullName, registrationForm);
        registrationForm.elements.register_check.classList.remove('error');
    } else { 
        Notiflix.Notify.failure('Passwords do not match!');
        registrationForm.elements.register_check.classList.add('error');
    }
})

logOutBtn.addEventListener('click', () => { 
    const auth = getAuth();
    signOut(auth).then(() => {
            Notiflix.Notify.info('success LogOut');
        beginLoginBtn.classList.remove('hidden');
        logOutBtn.classList.add('hidden');
}).catch((error) => {
});
})


function onSingIn(email, password,form) { 
    signInWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        Notiflix.Notify.success(`Welcome ${email}`);
        modalLogin.classList.remove('is-hidd');
        beginLoginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');
        backDrop.classList.remove('bacekdrop');
        resetForm(form)
    })
    .catch((error) => {
    const errorCode = error.code;
        const errorMessage = error.message;
        Notiflix.Notify.failure(`Can not Login ${errorMessage}`);
    });
}

function onRegistration(email, password, fullName,form) { 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        Notiflix.Notify.success(`Add new user ${email}`);
        modalLogin.classList.remove('is-hidd');
        beginLoginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');
        backDrop.classList.remove('bacekdrop');
            
            updateUser(auth.currentUser, fullName);
            resetForm(form);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Notiflix.Notify.failure(`Can not finish registration ${errorMessage}`);
        });
}


function updateUser(currentUser,fullName) { 
        updateProfile(currentUser, {
        displayName: fullName,
    }).then(() => {
        const user = auth.currentUser;
        
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;

        console.log(`displayName - ${displayName}`);
        console.log(`email - ${email}`);
        console.log(`emailVerified -${emailVerified}`);
        const uid = user.uid;
        }})
        .catch((error) => {
});
}

function resetForm(form) { 
    form.reset();
    loginForm.classList.remove('oldForm');
    registrationForm.classList.remove('newForm');
    formBackBtn.classList.add('hidden');
    modalLogin.classList.remove('newFormJS');
    
}

formBackBtn.addEventListener('click', () => { 
    formBackBtn.classList.add('hidden');
    modalLogin.classList.remove('newFormJS');
    loginForm.classList.remove('oldForm');
    registrationForm.classList.remove('newForm');
})

Notiflix.Notify.init({
    width: '280px',
    position: 'center-top',
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 1000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: false,
    pauseOnHover: true,
    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    fontFamily: 'Quicksand',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade',
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic',
    fontAwesomeIconSize: '34px',
    success: {
        background: '#ffffff',
        textColor: '#000',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: '#00ff00',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: '#00ff00',
        backOverlayColor: 'rgba(50,198,130,0.2)',
    },
    failure: {
        background: '#ffffff',
        textColor: '#000',
        childClassName: 'notiflix-notify-success',
        notiflixIconColor: '#ff0000',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: '#ff0000',
        backOverlayColor: 'rgba(50,198,130,0.2)',
    },
    info: {
        background: '#ffffff',
        textColor: '#000',
        childClassName: 'notiflix-notify-info',
        notiflixIconColor: '#0000ff',
        fontAwesomeClassName: 'fas fa-info-circle',
        fontAwesomeIconColor: '#0000ff',
        backOverlayColor: 'rgba(38,192,211,0.2)',
    }
});
