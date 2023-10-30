import React, { useRef } from "react";
import "../src/SignIn.css";
import {

  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from ".././src/firebase";
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
const nav = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      const Reg = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log(Reg);
      nav('/')
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (e) => {
    e.preventDefault();

    try {
      const Reg = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      nav('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signinScreen_gray">New to NetFlix ? </span>
          <span onClick={register} className="signinScreen_link">
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
