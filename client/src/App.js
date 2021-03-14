import React from 'react';
import AppBar from './components/appBar/AppBar';
import './style/App.css';
import MyRouter from './routers/MyRouter';

function App() {
  return (
    <div className="App">
      <AppBar />
      <MyRouter />
    </div>
  );
}

export default App;
