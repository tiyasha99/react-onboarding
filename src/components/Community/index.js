import React from 'react'
import { useState } from 'react'
import {Grid, 
        ImageIcon,
        CommunityFormWrapper,
        CommunityH1,
        CommunityForm,
      CommunityLabel,
      NameInput,
    CommunityTextArea} from './CommunityElements'
import logo from '../images/connect.svg'
import './tag.css'
import { BulletedTextArea } from 'react-bulleted-textarea'
const Community = () => {
  
  const values = ['']
  
  const [tags, setTags] = useState(["", ""]);
  const [getCount,setCount]=useState();
  const handleChange = (values) => {
    console.log(values) // [a, b, c]
  }
  const bulletChar = '-';
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        if(e.target.value.length<=3)
        {
          setTags([...tags, e.target.value]);
          e.target.value = "";
        }
        else{
          alert("Only 3 keywords are allowed");
        }
        
      }
    }
  };
 
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  function countWords(e) {
    console.log(e);
    let words=e.target.value;
    let c=0;
    for (let i = 0; i < words.length; i++) {
          if(words[i]==' ')
            c++;
          if(c>=10)
          {
            document.getElementById('character').setAttribute("disabled",true);
            alert("Word Limit Reached");
          }
             
    }
  }
  return (
    <>
      <Grid>
        <ImageIcon src={logo} alt="hello"/>
        <CommunityFormWrapper>
          <CommunityH1>befriend</CommunityH1>
        <CommunityForm>
          <CommunityLabel>Name</CommunityLabel>
          <NameInput></NameInput>
          <CommunityLabel>Purpose</CommunityLabel>
          <CommunityTextArea onChange={countWords} id="character"></CommunityTextArea>
          <CommunityLabel>Persona</CommunityLabel>
          <div className="tag-container" id="tag">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag} <span onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}

        <input onKeyDown={addTag} />
      </div>
      <CommunityLabel>Description</CommunityLabel>
      <CommunityTextArea></CommunityTextArea>
      <CommunityLabel>Rules</CommunityLabel>
      <BulletedTextArea
        onChange={handleChange}
        values={values}
        bulletChar={bulletChar}
        className="bullets"
      />
        </CommunityForm>
        </CommunityFormWrapper>
        
        

      </Grid>

    </>
  )
}

export default Community
