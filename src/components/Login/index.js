import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Form, FormButton, FormButton1, FormH1, FormInput, FormLabel, LoginCard, LoginContainer } from './LoginElements'
import './phone.css'
import firebase from 'firebase/app';
import 'firebase/auth';
const Login = () => {
  const [value, setValue] =useState();
  function handleOnClick(e){
    e.preventDefault();
    console.log(Object.values({value}));
    let phoneNo=Object.values({value});
    console.log(phoneNo[0]);
  }
  function handleChange(e){
    const {name,value} =e.target;
    this.setState({
      [name]:value
    })
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
    console.log('hilo');
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
      console.log('error');
    });
  }

  
  
  return (
   <LoginContainer>
     <LoginCard>
       <Form>
         <div id="sign-in-button"></div>
         <FormH1>
           Login to be friend
         </FormH1>
         <FormLabel>Phone</FormLabel>
         <PhoneInput
          placeholder="Enter phone number"
          className="phone"
          value={value}
          onChange={setValue}/>
          <FormButton onClick={onSignInSubmit}>Login</FormButton>
          <FormLabel>OTP</FormLabel>
          <FormInput name="otp" onChange={handleChange}></FormInput>
          <FormButton1>Submit</FormButton1>
       </Form>

     </LoginCard>
      

    </LoginContainer>
    
  )
  }

export default Login

