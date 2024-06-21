/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage,db } from "../firebase";
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(email, password);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      
      uploadTask.on(
        (error) => {
          setErr(true);
          // Handle unsuccessful uploads
        },
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          console.log("3");
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
          console.log("4");
          navigate("/")

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL,
          });
          console.log("5");
          await setDoc(doc(db, "userChats", res.user.uid), {});
          console.log("2");
          
          console.log("1");
        }
      );
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input type="file" id="file" className="fileSelection" />
          <label htmlFor="file">
            <img src="" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
