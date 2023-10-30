import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "../src/screens/HomeScreen";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./Login";
import { auth, onAuthStateChanged } from "../src/firebase.js";
import { logout, login, selectUser } from "../src/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "profile",
      element: <ProfileScreen />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
