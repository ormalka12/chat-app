import React, { useState } from 'react';
import logo from '../../style/images/logo1.png';
import LoggedOutAppBar from './LoggedOutAppBar';
import LoggedInAppBar from './LoggedInAppBar';

// function AppBar() {
//   return (
//     <div className="app-bar">
//       <a href="/home" className="imageAppBar">
//         <img src={logo} alt="logo" className="logo1" />
//       </a>
//       <a href="/login" className="linkAppBar">
//         LOGIN
//       </a>
//       <a href="/signup" className="linkAppBar">
//         SIGNUP
//       </a>
//     </div>
//   );
// }

function AppBar() {
  //const hasAccessToken = localStorage.getItem('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    console.log('delete token from localStorage');
  }

  return isLoggedIn ? (
    <div className="app-bar">
      <a href="/home" className="imageAppBar">
        <img src={logo} alt="logo" className="logo1" />
      </a>
      <LoggedInAppBar handleLogout={handleLogout} />
    </div>
  ) : (
    <div className="app-bar">
      <a href="/home" className="imageAppBar">
        <img src={logo} alt="logo" className="logo1" />
      </a>
      <LoggedOutAppBar />
    </div>
  );
}

export default AppBar;
