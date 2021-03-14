import React, { useState, useRef } from 'react';
import chatLogo from '../style/images/mibachat.png';
import { isEmail } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import AuthService from '../services/AuthService';
import Stars from '../style/starts';
import { useHistory } from 'react-router-dom';

function Register() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  let isFormValid = true;
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleNicknameChange(e) {
    setNickname(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const required = (value) => {
    if (!value) {
      isFormValid = false;
      return (
        <div className="alert alert-danger" role="alert">
          <p>This field is required!</p>
        </div>
      );
    }
  };

  const verifyEmail = (value) => {
    if (!isEmail(value)) {
      isFormValid = false;
      return (
        <div className="alert alert-danger" role="alert">
          <p>{value} is not a valid email.</p>
        </div>
      );
    }
  };

  const vefifyUsername = (value, props) => {
    if (value.length < 3 || value.length > props.maxLength) {
      isFormValid = false;
      return (
        <div className="alert alert-danger" role="alert">
          <p>Nickname must be between 3 and {props.maxLength} characters.</p>
        </div>
      );
    }
  };

  const verifyPassword = (value, props) => {
    if (value.length < 6 || value.length > props.maxLength) {
      isFormValid = false;
      return (
        <div className="alert alert-danger" role="alert">
          <p>Password must be between 6 and {props.maxLength} characters.</p>
        </div>
      );
    }
  };

  async function handleRegister(e) {
    try {
      console.log('handleRegister');
      e.preventDefault();
      await AuthService.register(nickname, email, password);
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
      <Form className="form-signin" onSubmit={handleRegister} ref={form}>
        <img class="mb-4" src={chatLogo} alt="" width="72" height="72" />
        <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label for="inputEmail" class="sr-only">
          Nickname
        </label>
        <Input
          placeholder="Nickname"
          type="text"
          className="form-control"
          name="nickname"
          maxLength="16"
          onChange={handleNicknameChange}
          validations={[required, vefifyUsername]}
        />
        <label for="inputEmail" class="sr-only">
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
        <label for="inputPassword" class="sr-only">
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

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block">Sign Up</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </Form>
    </div>
  );
}

export default Register;
