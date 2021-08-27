import styled from "styled-components";

export const LoginContainer= styled.div`
max-height:800px;
position:relative;
margin:0 auto;
position:absolute;
display:flex;
top:5rem;
z-index:1;
overflow:hidden;
background:#FBF6F5;
border: 2px solid black;
border-radius:10px;
left:18rem;
@media screen and (max-width: 1100px){
  left:12rem;
  height:auto;
 }
@media screen and (max-width: 900px){
  left:5rem;
  height:auto;
  width:20%;
  
  width:80%;
 }
 @media screen and (max-width: 900px){
  left:2rem;
  height:auto;
  width:20%;
  
  width:80%;
 }
 @media screen and (max-wdth: 400px){
  left:-3rem;
  height:auto;
  
  width:30%;
  
 }
 @media screen and (max-wdth: 500px){
  left:-3rem;
  height:400px;
  
  width:80%;
  
 }
 
`
export const LoginCard = styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:800px;
height: 28rem;
padding:0px;
box-shadow:0 1px 3px rgba(0,0,0,0,2);

@media screen and (max-wdth: 400px){
 height:50%
 left:8rem;
}
@media screen and (max-wdth: 400px){
  height:50%
  left:5rem;
 }
`

export const LoginIcon2 = styled.img`
height:450px;
width:400px;
z-index:20;
margin-top:0rem;
background:#fff;
@media screen and (max-wdth: 400px){
  display:none;
 }

`


export const Form= styled.form`
background:#fff;
max-width:400px;
height:auto;
width:100%;
z-index:1;
margin:0 auto;
padding:80px 32px;
border-radius:4px;
box shadow: 0 1px 3px rgba(0,0,0,0,0.9);

@media screen and (max-width:400px){
 padding: 32px 32px;
}
@media screen and (max-width:76800px){
  padding: 32px 32px;
  
 }
`
export const FormH1= styled.h1`
margin-bottom:0px;
color:#000;
font-size:2rem;
font-weight:400;
text-align:center;
padding-bottom:6rem;
background:#fff;
@media screen and (max-width:400px){
  font-size:1.5rem;
  right: 2rem;
 }
 @media screen and (max-width:500px){
  font-size:2rem;
  margin-right:3rem;
  
 }
`;
export const FormLabel=styled.div`
margin-top:60px;
margin-bottom:0;
font-size:1rem;
color:#333;
background:#fff;
margin-right:14rem;
@media screen and (max-width:400px){
  font-size:0.8rem;
 }
`;
export const FormLabel1=styled.div`
margin-top:80px;
margin-bottom:0;
font-size:1rem;
color:#333;
top:2rem;
width:2rem;
background:#fff;
left:-0.5rem;
padding:0;
z-index:0;
position:relative;
@media screen and (max-width:400px){
  font-size:0.8rem;
 }
`;




export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom:32px;
border: 1px solid #555;
border-radius: 4px;
width:89.5%;
height:2.5rem;
background:#fff;
margin-left:2rem;

@media screen and (max-width:400px){
  width:89.5%;
  margin-bottom:22px;
 }
 @media screen and (max-width:500px){
  width:15rem;
  
 }
`
export const FormButton=styled.button`
background:#F9A826;
padding:10px;
padding-right:18px;
padding-left:18px;
border: none;
border-radius:10px;
font-size:16px;
color:#fff;
cursor:pointer;
position:absolute;
margin-top:0.5rem;

left:10rem;

&:hover{
  border:2px solid black;
  background:white;
  color:#000;
}

@media screen and (max-width:400px){
  font-size:0.8rem;
  left:8rem;
 }
 @media screen and (max-width:500px){
  font-size:0.8rem;
  left:9rem;
 }
`;
export const FormButton1=styled.button`
background:#F9A826;
padding:10px;
padding-right:20px;
padding-left:20px;
border: none;
border-radius:10px;
font-size:16px;
color:#fff;
cursor:pointer;
position:absolute;
margin-top:3.5rem;
left: 10.2rem;

&:hover{
  border:2px solid black;
  background:white;
  color:#000;
}
@media screen and (max-width:500px){
  bottom:.5rem;
  left: 9rem;
  font-size:0.8rem;
  
 }
 @media screen and (max-width:400px){
  bottom:.5rem;
  left: 6rem;
  font-size:0.8rem;
  
 }
`;