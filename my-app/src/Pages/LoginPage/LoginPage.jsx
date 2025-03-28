import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase.js"; // Ensure correct Firebase import
import Email from "../../Components/LoginComponents/Email.jsx";
import Password from "../../Components/LoginComponents/Password.jsx";
import CreateAccountButton from "../../Components/LoginComponents/CreateAccountButton.jsx";
import { handleAuthentication } from "../../Components/LoginComponents/Authenication.jsx";
import "./LoginPage.css";

const fetchImages = async () => {
  try {
    const docRef = doc(db, "FrontendImages", "LoginScreenImage");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().imageUrl;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

const LoginPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImages();
      setImageUrl(url);
    };
    loadImage();
  }, []);

  const handleLogin = () => {
    handleAuthentication(email, password, "login", navigate);
  };

  return (
    <div className="login-page">
      {/* Left side: Image container */}
      <div className="login-page-image-container">
        {imageUrl && <img src={imageUrl} alt="Login Illustration" className="login-image" />}
      </div>

      
      <div className="login-separator"></div>

      {/* Right side: Login form */}
      <div className="login-form-container">
        <h1 className="login-page-hero-text">Create an account</h1>
        <p className="login-page-subtext">
          Already have an account? <button className="login-text-button" onClick={handleLogin} disabled={!email || !password}>Log in</button>
           
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Email value={email} onChange={(e) => setEmail(e.target.value)}  />
          <Password value={password} onChange={(e) => setPassword(e.target.value)}/>
          <CreateAccountButton email={email} password={password} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
