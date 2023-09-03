import { initializeApp } from 'firebase/app';
import { getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyDb4fiBzQcwev-cuSKeJNgdIUn_Jaxuzuo',
  authDomain: 'grow-with-e4967.firebaseapp.com',
  projectId: 'grow-with-e4967',
  storageBucket: 'grow-with-e4967.appspot.com',
  messagingSenderId: '206694780777',
  appId: '1:206694780777:web:2a5411d0bae9a1a91677f8',
  measurementId: 'G-FWSJX47MW5',
});

const auth = getAuth(app);

// Let Remix handle the persistence via session cookies.
setPersistence(auth, inMemoryPersistence);

export { auth };
export const db = getFirestore(app);
