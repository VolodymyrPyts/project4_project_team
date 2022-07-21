import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile,
} from 'firebase/auth';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
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
const storage = getStorage(app);

const singInForm = document.querySelector('.singUp__form');
const singUpForm = document.querySelector('.singUp__form-second');
const modalLogin = document.querySelector('.modal__login');
const beginLoginBtn = document.querySelector('.btn__form-login');
const logOutBtn = document.querySelector('.logOut__btn');
const backDrop = document.querySelector('.bacekdrop_box');

logOutBtn.addEventListener('click', () => { 
    const auth = getAuth();
    signOut(auth).then(() => {
            Notiflix.Notify.success('by');
        beginLoginBtn.classList.remove('hidden');
        logOutBtn.classList.add('hidden');
}).catch((error) => {
  // An error happened.
});
})

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
    onSingIn(email, password);
});


singUpForm.addEventListener('submit',  e => { 
    e.preventDefault();

    // const file = singUpForm.elements.image.files.item(0);
    // const path = 'userPhotos/' + file.name;
    // const imageRef = ref(storage, path);
    const fullName = singUpForm.elements.firstName.value + " " + singUpForm.elements.secondName.value;

    const email = singInForm.elements.email.value;
    const password = singInForm.elements.text.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Notiflix.Notify.success(`Add new user ${email}`);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    
})


function onSingIn(email, password) { 
    signInWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        Notiflix.Notify.success(`Welcome ${email}`);
        modalLogin.classList.remove('is-hidd');
        beginLoginBtn.classList.add('hidden');
        logOutBtn.classList.remove('hidden');
        backDrop.classList.remove('bacekdrop');

    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`can not logIn ${errorMessage}`);
    });
    
}


// async function makeImgUrl(imageRef, file) { 
//     const uploadTask = uploadBytesResumable(imageRef, file);
//     let url = '';

//     try { 
//         url = await getDownloadURL(uploadTask.snapshot.ref);
//     }
//     return url;
// };






function updateUser(currentUser,fullName) { 
        updateProfile(currentUser, {
        displayName: fullName,
        // photoURL: photoUrl,
    }).then(() => {
                const user = auth.currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        // const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
    
        console.log(`displayName - ${displayName}`);
        console.log(`email - ${email}`);
        // console.log(`photoURL -${photoURL}`);
        console.log(`emailVerified -${emailVerified}`);

    const uid = user.uid;
    }
    })
        .catch((error) => {
});
}

