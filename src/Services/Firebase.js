import { store } from '@/Vuex/store';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdDje2zlHg3iiaN7gGrDHRSnzoXXz8Cz0",
    authDomain: "uaminc-live.firebaseapp.com",
    databaseURL: "https://uaminc-live.firebaseio.com",
    projectId: "uaminc-live",
    storageBucket: "uaminc-live.appspot.com",
    messagingSenderId: "986160035436",
    appId: "1:986160035436:web:cef8c6953623eb84"
});

export const db = firebaseApp.firestore();
