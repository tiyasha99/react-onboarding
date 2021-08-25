import React, {useState} from 'react'
import { HomepageContainer } from './HomePageElements';
import { Imageleft, HomeBg } from './HomePageElements';
import { Imageright } from './HomePageElements'
import left from '../images/L.svg';
import right from '../images/R3.svg';
import { HomeBtnWrapper, HomeP, HomeContent, HomeH2, HomeSpan } from './HomePageElements';
import {Button} from '../ButtonElement';

const Homepage = () => {

  const [hover,sethover] =useState(false)
  const onHover = () => {
    sethover(!hover)
  }
  return (
    <HomepageContainer id='home'>
      <HomeSpan></HomeSpan>
      <HomeBg>
      <Imageleft src={left}/>
        <Imageright src={right}/>
      </HomeBg>
        
        
        <HomeContent>
          <HomeH2>Hey there! having</HomeH2>
          
          <HomeH2>trouble making friends</HomeH2>
          
          
          
          <HomeP>We are here to help you find your friends, no matter what you are we always happy to welcome you, we just be friend here!</HomeP>
          <HomeBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Join us Now
            </Button>
          </HomeBtnWrapper>
         
        </HomeContent>
       
        
    </HomepageContainer>
  )
}

export default Homepage
