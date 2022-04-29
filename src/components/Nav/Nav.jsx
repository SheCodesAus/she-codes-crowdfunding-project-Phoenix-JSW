import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;

// import React, { useState, useEffect } from "react"
// import { Link, useHistory, useLocation } from "react-router-dom"
// import NavOwner from "../NavOwner/NavOwner"
// import NavSupporter from "../NavSupporter/NavSupporter"
// import "./Nav.css"

// function Nav() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [ownerStatus, setOwnerStatus] = useState(false)
//   // const [loading, setLoading] = useState(true);

//   const history = useHistory()
//   const location = useLocation()

//   useEffect(() => {
//     const token = window.localStorage.getItem("token")
//     const isOwner = window.localStorage.getItem("is_owner")
//     console.log(isOwner)
//     token != null ? setLoggedIn(true) : setLoggedIn(false)
//     isOwner === "true" ? setOwnerStatus(true) : setOwnerStatus(false)
//   }, [location])

//   const logOut = () => {
//     window.localStorage.clear()
//     history.push("/login")
//   }

//   if (loggedIn === true) {
//     if (ownerStatus === true) {
//       return <NavOwner logOut={logOut} />
//     }
//     return <NavSupporter logOut={logOut} />
//   } else {
//     return (
//       <nav className="nav">
//         <Link className="nav-link nav-home" to="/">
//           Home
//         </Link>
//         <Link className="nav-link nav-login" to="/login">
//           Log In
//         </Link>
//         <Link className="nav-link nav-signup" to="/signup">
//           Sign Up
//         </Link>
//       </nav>
//     )
//   }
// }

// export default Nav