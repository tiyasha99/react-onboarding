import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { LoginCard, LoginContainer,FormH1,FormButton, FormInput, FormLabel,FormButton1 } from './LoginElements'


const LoginOTP = () => {
  
  

  return (
    
    <LoginContainer>

      <LoginCard>
        <FormH1>
          Login to befriend
        </FormH1>
        <FormLabel>Phone</FormLabel>
        <PhoneInput
        country={'in'}
       
        name="mobile"
        placeholder="Mobile number" required
    />
        
       <FormButton1>Submit</FormButton1>
        <FormLabel >OTP</FormLabel>
        <FormInput name="OTP"
        placeholder="Enter OTP" required
        ></FormInput>
        <FormButton>Login</FormButton>

      </LoginCard>

    </LoginContainer>

   


    
    
  )
  }


export default LoginOTP
