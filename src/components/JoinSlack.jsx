import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import {cardShadow,hoverEffect, themeColor, darkThemeColor} from '../utils'
import AvatarImage from '../assets/avatar2.jpg'
import AvatarImage2 from '../assets/avatar3.jpg'
import AvatarImage3 from '../assets/avatar4.jpg'

import {FaSlack} from 'react-icons/fa'

function JoinSlack() {
  return  <JoinChannel>
       <CardContent>
            <Slack>
                 <SlackLogo>
                      <FaSlack />
                 </SlackLogo>
                 <SlackText>
                      <SlackHead>
                           Engage with clients
                      </SlackHead>
                      <SlackFoot>Join slack channel</SlackFoot>
                 </SlackText>
            </Slack>
            <SlackJoin>Join Now</SlackJoin>
       </CardContent>
  </JoinChannel>;
}

const JoinChannel = styled.div`
background-color: ${darkThemeColor};
height: 50%;
margin-top: 9.0rem;
border-radius: 1rem;
display:flex;
align-items: center;
transition : 0.3s ease-in-out;

&:hover{
     box-shadow:${hoverEffect};
}
`;
const CardContent = styled.div`
margin: 1rem;
width: 100%;
display:flex;
align-item:center;
justify-content:space-between;
`;
const Slack = styled.div`
display: flex;

`;
const SlackLogo = styled.div`
margin-right: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
svg{
     color: white;
     height: 3rem;
     width : 3rem;
}
`;
const SlackText = styled.div`
color: white;
`;
const SlackHead = styled.h2`
font-weight: 500;
`;
const SlackFoot = styled.h5`
color: #e4e4e4;
font-weight: normal;
`;
const SlackJoin = styled.button`
background-color: ${themeColor};
border:none;
outline: none;
padding: 1rem 2rem;
color: white;
border-radius: 0.5rem;
font-size:1.2rem;
font-weight: bold;
cursor: pointer;
`;


export default JoinSlack;
