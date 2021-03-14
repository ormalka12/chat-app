import React from 'react';

function LoggedInAppBar(props) {
  return (
    <div>
      <a href="/logout" className="linkAppBar" onClick={props.handleLogout}>
        LOGOUT
      </a>
    </div>
  );
}

export default LoggedInAppBar;
