import React, {useState} from 'react'
import Navbar from '../navbar'
import Sidebar from '../Sidebar'
import Homepage from '../homepage'
import Services from '../Services'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
     
      <Navbar toggle={toggle}/>
      <Homepage/>
      <Services/>
      
    </>
  )
}

export default Home
