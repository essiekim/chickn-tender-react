import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'
import secret from '../secrets'

const firebaseConfig = {
  apiKey: secret.apiKey,
  authDomain: 'chickn-tender.firebaseapp.com',
  databaseURL: 'chickn-tender.firebaseio.com',
  projectId: 'chickn-tender',
  storageBucket: 'chickn-tender.appspot.com',
  messagingSenderId: secret.messageId,
  appId: secret.appId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
