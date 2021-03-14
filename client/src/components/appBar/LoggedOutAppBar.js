import React from 'react';

function LoggedOutAppBar() {
  return (
    <div>
      <a href="/login" className="linkAppBar">
        LOGIN
      </a>
      <a href="/signup" className="linkAppBar">
        SIGNUP
      </a>
    </div>
  );
}

export default LoggedOutAppBar;
