import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Form, FormButton, FormButton1, FormH1, FormLabel1, FormInput, FormLabel, LoginCard, LoginContainer, LoginIcon, LoginIcon2 } from './LoginElements'
import firebase from './firebase'
import {useHistory} from "react-router-dom";
import './phone.css'
import log1 from '../images/log1.svg'
const Login = () => {
  const [value, setValue, disabled] =useState();
  const [getOTP, setOTP]= useState();
  let history = useHistory();
  
 
  function handleChange(e){
    console.log(e.target.value);
    setOTP(e.target.value);
  }
  function configureCaptcha(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log('recaptcha');
      }
      
    });
  }
  function onSignInSubmit(e){
    e.preventDefault();
    
    configureCaptcha();
    
    let phoneNo=Object.values({value});
    console.log(phoneNo[0]);
    const phoneNumber = phoneNo[0];
    console.log(`hi + ${phoneNumber}`);
    
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log('Otp sent');
      
      
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
    });
  }
  function onSubmitOTP(e){
    e.preventDefault()
    const code = getOTP;
    console.log({code});
    window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  history.push('/Community');

  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  alert('Wrong OTP!')
});
  }

 
  
  
  return (
   <>
     
     <LoginContainer>
     <LoginCard>
       <Form>
         <div id="sign-in-button"></div>
         <FormH1>
           Login to be friend
         </FormH1>
         <PhoneInput
          placeholder="Enter phone number"
          className="phone"
          value={value}
          onChange={setValue}
          />
          <FormButton onClick={onSignInSubmit}>Submit</FormButton>
          <FormLabel1>OTP</FormLabel1>
          <FormInput name="otp"  onChange={handleChange} placeholder="Enter OTP"></FormInput>
          <FormButton1 onClick={onSubmitOTP}>Login</FormButton1>
       </Form>

     </LoginCard>
     <LoginIcon2 src={log1}/>

    </LoginContainer>
    
    </>
    
  
  )
  }

export default Login

