import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAQReZrSyaFzp_A7cqzSc0GaEANxpJ_MkY',
  authDomain: 'trip-planner-917d7.firebaseapp.com',
  projectId: 'trip-planner-917d7',
  storageBucket: 'trip-planner-917d7.appspot.com',
  messagingSenderId: '721354497506',
  appId: '1:721354497506:web:5b92b01bcd87458978edbb',
  measurementId: 'G-SYL9HCTTEY',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
