import styled from "styled-components";

export const LoginContainer= styled.div`
min-height:692px;
position:fixed;
margin:0 auto;
left: 33rem;
top:5rem;
z-index:0;
overflow:hidden;
background:#FBF6F5;
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
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0,2);

@media screen and (max-wdth: 400px){
 height:80%
}
`
export const LoginIcon = styled.img`
height:160px;
width:160px;
margin-bottom:10px;
border-radius:50%;
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
`
export const FormH1= styled.h1`
margin-bottom:0px;
color:#000;
font-size:2rem;
font-weight:400;
text-align:center;
background:#fff;

`;
export const FormLabel=styled.div`
margin-top:60px;
margin-bottom:0;
font-size:1rem;
color:#333;
background:#fff;
margin-right:14rem;
`;




export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom:32px;
border: 1px solid #555;
border-radius: 4px;
width:100%;
height:2.5rem;
background:#fff;
`
export const FormButton=styled.button`
background:#F9A826;
padding:10px;
border: none;
border-radius:10px;
font-size:16px;
color:#fff;
cursor:pointer;
position:absolute;
margin-top:10rem;

&:hover{
  border:2px solid black;
  background:white;
  color:#000;
}
`;
export const FormButton1=styled.button`
background:#F9A826;
padding:10px;
border: none;
border-radius:10px;
font-size:16px;
color:#fff;
cursor:pointer;
position:absolute;
margin-top:20rem;

&:hover{
  border:2px solid black;
  background:white;
  color:#000;
}
`;