import styled from "styled-components"



export const HomepageContainer = styled.div`
  display:flex;
  padding: 0 30px;
  height: 600px;
  position: relative;
  justify-content:center;
  align-items:center;
  z-index:5;

`
export const HomeBg = styled.div`
position: absolute;
top:0;
right: 0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

export const Imageleft = styled.img`
height:400px;
width:400px;
margin-top:5rem;
margin-right: 34rem;
z-index:1;
position:relative;

@media screen and (max-width:480px) {
  display:none;
}
@media screen and (max-width:768px) {
  display:none;
`
export const Imageright = styled.img`
height:400px;
width:400px;
margin-top:12rem;
z-index:10;
position:relative;
border-radius:40px;
@media screen and (max-width:768px) {
  display:none;

@media screen and (max-width:480px) {
  display:none;

`

export const HomeContent = styled.div`
z-index:5;
max-width:1200px;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
bottom:8rem;
`

export const HomeH2= styled.h1`
color:#000;
font-size:48px;
text-align:center;
font-family:"Times New Roman", Times, serif;
width:30rem;
position:relative;
z-index:5;
opacity:1.5;


@media screen and (max-width:768px) {
  font-size:40px;
}

@media screen and (max-width:480px) {
  font-size:28px;
}

`
export const HomeSpan=styled.div`
width: 145px;
border-bottom: 15px solid #F9A826;
z-index:10;
margin-left:20rem;
top:8.5rem;
position:absolute;
opacity:0.5;
position:absolute;



@media screen and (max-width:768px) {
  margin-left:17rem;
  top:6rem;
  width: 138px;
}

@media screen and (max-width:480px) {
  width: 90px;
  margin-left:12rem;
  top:7rem;
  height:.2rem;
  border-bottom: 10px solid #F9A826;
}
`

export const HomeP =styled.p`
 margin-top:24px;
 color:#444;
 font-size:16px;
 text-align:center;
 max-width:600px;
 font-family:Verdana, sans-serif;

 @media screen and (max-width:768px) {
  font-size:24px;
 }

@media screen and (max-width:480px) {
  font-size:14px;
  max-width:400px;
}
@media screen and (max-width:350px) {
  font-size:14px;
  max-width:340px;
}

`

export const HomeBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`