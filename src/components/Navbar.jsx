import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
const {currentUser}=useContext(AuthContext)
console.log("currentUser",currentUser)
  return (
    <div className="navbar">
      <span className="logo">CHAT APP</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
        </div>{" "}
    </div>
  );
}

export default Navbar;
