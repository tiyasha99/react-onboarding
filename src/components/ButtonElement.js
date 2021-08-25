import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button=styled(Link)`
  border-radius:10px;
  background: #000;
  color:#fff;
  font-family:Verdana, sans-serif;
  white-space:no-wrap;
  padding: ${({big})=> (big?'14px 48px':'12px 30px')};
  font-size:${({fontBig}) => (fontBig? '20px':'16px')};
  outline:none;
  border:none;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:all 0.2s ease-in-out;

  &:hover{
    transition:all 0.2s ease-in-out;
  color:#000;
  background: #fff;
  border:2px solid #333;

  }

`