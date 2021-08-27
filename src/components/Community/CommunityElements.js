import styled from 'styled-components'

export const Grid=styled.div`
max-width:auto;
max-height:auto;
@media screen and (max-width:900px)
{
  max-width:400px;
  max-height:500px;
}
`
export const ImageIcon=styled.img`
height:650px;
width:650px;
margin-left:5rem;
z-index:1;
position:absolute;
top:3rem;

@media screen and (max-width:1000px){
 display:none;
 }
`
export const CommunityFormWrapper=styled.div`
z-index:2;
height:auto;
width:400px;;
background:white;
border: 2px solid #F9A826;
top:1rem;
float:right;
left:-4rem;
position:relative;
border-radius:10px;
@media screen and (max-width:1000px){
  height: auto;
  left:5rem;
  width:300px;
 }
 @media screen and (max-width:500px){
  height: auto;
  left:3rem;
  width:300px;
  float:left;
 }
 @media screen and (max-width:400px){
  height: auto;
  left:1rem;
  width:250px;
  float:left;
 }

`
export const CommunityH1=styled.h1`
  color:#000;
  font-size:2rem;
  justify-content:center;
  align-items:center;
  background:#fff;
  right: 9rem;
  top:1.5rem;
  position:absolute;
  @media screen and (max-width:400px){
    left:1rem;
    font-size:1.5rem
   }

`
export const CommunityForm= styled.form`
background:#fff;
max-width:700px;
height:auto;
width:100%;
z-index:1;
margin:0 auto;
padding:40px 32px;
border-radius:4px;
box shadow: 0 1px 3px rgba(0,0,0,0,0.9);

@media screen and (max-width:400px){
 padding: 32px 32px;
}
@media screen and (max-width:768px){
  padding: 32px 32px;
  
 }
`
export const CommunityLabel=styled.div`
margin-top:40px;
margin-bottom:0;
font-size:1rem;
color:#333;
background:#fff;
margin-right:14rem;
@media screen and (max-width:400px){
  font-size:0.8rem;
 }
`;
export const NameInput=styled.input`
height:2rem;
width:20rem;
border: 1px solid #666;
border-radius:10px;
background:white;
@media screen and (max-width:1000px){
  width:15rem;
 }
 @media screen and (max-width:400px){
  width:12rem;
 }
`
export const CommunityTextArea=styled.textarea`
height:5rem;
width:20rem;
border: 1px solid #666;
border-radius:10px;
background:white;
wrap:hard;
font-size:1rem;
@media screen and (max-width:1000px){
  width:13rem;
 }
`