// import React, { useState } from 'react';
// import Field from './Field';
// import FormButton from './FormButton';
// import chatLogo from '../style/images/mibachat.png';
// import { isEmail } from 'validator';
// //import 'bootstrap/dist/css/bootstrap.min.css';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [nickname, setErrorCodes] = useState('');
//   const [password, setNumAcc] = useState('');

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }
//   function handleErrorCodesChange(e) {
//     setErrorCodes(e.target.value);
//   }
//   function handleNumOfAccChange(e) {
//     setNumAcc(e.target.value);
//   }

//   return (
//     <div className="signup-container">
//       <link
//         rel="stylesheet"
//         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//         integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//         crossorigin="anonymous"
//       />
//       <img src={chatLogo} alt="chatLogo" className="mibachatlogo" />
//       <form className="signup-form">
//         <div>
//           <Field
//             fieldName="Email"
//             onChange={handleEmailChange}
//             validations={[required, email]}
//           />
//           <Field
//             fieldName="Nickname"
//             onChange={handleErrorCodesChange}
//             validations={[required, vusername]}
//           />
//           <Field
//             fieldName="Password"
//             onChange={handleNumOfAccChange}
//             validations={[required, vpassword]}
//           />
//           {addWhitespace()}
//           <FormButton email={email} nickname={nickname} password={password} />
//         </div>
//       </form>
//     </div>
//   );

//   function addWhitespace() {
//     return (
//       <div>
//         <br></br>
//       </div>
//     );
//   }
// }

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const email = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

// export default Signup;
