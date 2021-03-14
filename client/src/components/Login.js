import React, { useState, useRef } from 'react';
import chatLogo from '../style/images/mibachat.png';
import { isEmail } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import AuthService from '../services/AuthService';
import Stars from '../style/starts';
import { useHistory } from 'react-router-dom';

function Login() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin(e) {
    try {
      console.log('handleLogin');
      e.preventDefault();
      await AuthService.login(email, password);
      const token = localStorage.getItem('accessToken');
      await AuthService.chat(token);
      console.log('redirect to /chat');
      history.push('/chat');
    } catch (e) {
      history.push('/');
    }
  }

  return (
    <div className="my-login-form">
      <Stars />
      <Form className="form-signin" onSubmit={handleLogin} ref={form}>
        <img className="mb-4" src={chatLogo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Welcome Back!</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <Input
          placeholder="Email address"
          type="email"
          className="form-control"
          name="email"
          onChange={handleEmailChange}
          validations={[required, verifyEmail]}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <Input
          placeholder="Password"
          type="password"
          className="form-control"
          maxLength="16"
          name="password"
          onChange={handlePasswordChange}
          validations={[required, verifyPassword]}
        />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block">Log In</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </Form>
    </div>
  );
}

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        <p>This field is required!</p>
      </div>
    );
  }
};

const verifyEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        <p>{value} is not a valid email.</p>
      </div>
    );
  }
};

const verifyPassword = (value, props) => {
  if (value.length < 6 || value.length > props.maxLength) {
    return (
      <div className="alert alert-danger" role="alert">
        <p>Password must be between 6 and {props.maxLength} characters.</p>
      </div>
    );
  }
};

export default Login;
