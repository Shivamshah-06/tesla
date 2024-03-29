import React from 'react'
import styled from "styled-components"
const Fade = require("react-reveal/Fade")

function Section(props) {
  console.log(props);
    return (
   <Wrap bgImg={props.backgroundImg}>
    <Fade bottom>
    <Itemtext>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </Itemtext>
    
    <Buttons>
    <ButtonGroup>
        <LeftButton>
            {props.leftBtnText}
        </LeftButton>
        {props.rightBtnText &&
        <RightButton>
            {props.rightBtnText}
        </RightButton>}
    </ButtonGroup>
   
    <DownArrow src="/images/down-arrow.svg"/>
    </Buttons>
    </Fade>
   </Wrap>
  )
}

export default Section
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImg}")`};
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;



`
const Itemtext=styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:786px){
    flex-direction:column;
}

`



const LeftButton=styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display: flex;
justify-content:center;
border-radius:100px;
opacity: 0.85;
text-transform:uppercase;
// font-size:12px;
padding:10px;
cursor:pointer;
margin: 8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`
const DownArrow=styled.img`

height:40px;
overflow -x:hidden;
animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`
`