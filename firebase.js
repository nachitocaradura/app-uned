import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlqzahzJ5UMaN_tpkzxKp_MlZ78wjqdx4",
  authDomain: "app-uned-4e17c.firebaseapp.com",
  projectId: "app-uned-4e17c",
  storageBucket: "app-uned-4e17c.firebasestorage.app",
  messagingSenderId: "692772965959",
  appId: "1:692772965959:web:9d1a3c2fb268f7761aab62",
  measurementId: "G-ND288L94EV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
