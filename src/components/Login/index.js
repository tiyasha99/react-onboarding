import React, { useState } from "react";
import reactDom from "react-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import firebase from '../firebase';
import { LoginCard, LoginContainer,FormH1,FormButton, FormInput, FormLabel,FormButton1 } from './LoginElements'
import { getAuth, RecaptchaVerifier } from "firebase/auth";


class LoginOTP extends React.Component{
  constructor(props){
    super(props)
    this.state={
      phoneNo: '',
      otp:''
    }
    
  }
  onHandlePhoneNo(value){
    console.log(value);
    console.log('hi');
    console.log(this.state.phoneNo);
  }
  setState(value) {
    console.log(Object.values(value));
    const num=Object.values(value);
    this.onHandlePhoneNo(num);

  }
  handleClick= () => {
    console.log('hi');
    let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'invisible'});
    let number=8389948766;
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      let code=prompt('enter the OTP', '');
      if(code===null)
        return;
      e.confirm(code).then(function(result){
        console.log(result.user,'user');
        alert('verified')
      }).catch((error)=> {
        console.log(error);
      })
    })
  }
  configureCaptcha=()=>{
    const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    this.onSignInSubmit();
  }
}, auth);
  }
  onSignInSubmit=(e)=>{
    e.preventDefault();
    const phoneNumber = '+918389948766';
    this.configureCaptcha();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log('sent');
      // ...
    }).catch((error) => {
      console.log('error');
      // Error; SMS not sent
      // ...
    });
  }
    
  
  render(){
    return (
          
    <LoginContainer>

    <LoginCard>
      <FormH1>
        Login to befriend
      </FormH1>
      <FormLabel>Phone</FormLabel>
      <PhoneInput
      country={'in'}
      value={this.state.phoneNo}
      onChange={phoneNo => this.setState({ phoneNo })}
      
      name="mobile"
      placeholder="Mobile number" required
  />
      
     <FormButton1 type="button" onClick={this.handleClick}>Submit</FormButton1>
     <div id="sign-in-button"></div>
      <FormLabel >OTP</FormLabel>
      <FormInput name="OTP"
      placeholder="Enter OTP" required
      
      ></FormInput>
      <FormButton>Login</FormButton>
      
    </LoginCard>

  </LoginContainer>
    )
  }
}





export default LoginOTP
