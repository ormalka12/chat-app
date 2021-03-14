// import React from 'react';

// function FormButton(props) {
//   const email = props.email;
//   const nickname = props.nickname;
//   const password = props.password;
//   return (
//     <input
//       className="submitButton"
//       type="button"
//       value="SIGN UP"
//       onClick={() => {
//         onSubmit(email, nickname, password);
//       }}
//     ></input>
//   );
// }
// function onSubmit(email, nickname, password) {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonObject) => {
//       console.log(jsonObject.value);
//       console.log(
//         `Email: ${email}, Nickname:${nickname}, Password:${password}`
//       );
//     });
// }

// //export default FormButton;
