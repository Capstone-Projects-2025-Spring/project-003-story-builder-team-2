import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { db } from "firebase";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, 
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function testFirebaseConnection() {
  try {
    // Reference a test document (ensure this exists in your Firestore)
    const testDocRef = doc(db, "testCollection", "testDocument");
    const docSnap = await getDoc(testDocRef);

    if (docSnap.exists()) {
      console.log("✅ Firestore is connected! Document data:", docSnap.data());
    } else {
      console.log("⚠️ Firestore is connected, but document does not exist.");
    }
  } catch (error) {
    console.error("❌ Error connecting to Firestore:", error);
  }
}

// Run the test function
testFirebaseConnection();

export { db, app, analytics };
