import axios from 'axios';

const API_URL = 'http://localhost:3001/auth/';

const register = (nickname, email, password) => {
  return axios
    .post(API_URL + 'signup', {
      nickname: nickname,
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      if (response.data.accessToken) {
        const accessToken = response.data.accessToken;
        console.log(`token: ${response.data.accessToken}`);
        localStorage.setItem('accessToken', accessToken);
        console.log(`token was saved!`);
      } else {
        throw Error('Unable to login. access token is needed!');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(`token: ${response.data.accessToken}`);
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
      } else {
        throw Error('Unable to login. access token is needed!');
      }
    });
};

const chat = (accesToken) => {
  return axios
    .get(API_URL + 'chat', {
      headers: {
        Authorization: ` ${accesToken}`,
      },
    })
    .then((response) => {
      console.log(response);
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  chat,
  getCurrentUser,
};
