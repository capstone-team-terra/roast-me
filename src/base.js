import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA27IqXB0y-zzNo6VKGeNdzStu0pWPLodg',
  authDomain: 'roastflix-a53f3.firebaseapp.com',
  projectId: 'roastflix-a53f3',
  storageBucket: 'roastflix-a53f3.appspot.com',
  messagingSenderId: '872835895022',
  appId: '1:872835895022:web:b25898c242573c82246dff',
  measurementId: 'G-D9G0EZX8JJ'
}

export const app = firebase.initializeApp(firebaseConfig)
