import React from "react";
import "../src/ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth, signOut } from "../src/firebase.js";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            className="profileScreen_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profilelogo"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
                <h3>Plans</h3>
              <button
                onClick={() => signOut(auth)}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
