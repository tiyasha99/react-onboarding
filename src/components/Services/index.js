import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesIcon, ServicesWrapper } from './ServiceElements'
import Icon1 from '../images/fun.svg'
import Icon2 from '../images/easy.svg'
import Icon3 from '../images/friend.svg'
const Services = () => {
  return (
    
      <ServicesContainer id="services">
        <ServicesH1>Why we think we can help you?</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>This community is fun</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>It's pretty easy</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Be friend with others</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
  )
}

export default Services
