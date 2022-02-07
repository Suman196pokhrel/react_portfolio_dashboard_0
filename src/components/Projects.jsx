import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import {cardShadow,hoverEffect, themeColor} from '../utils'
import AvatarImage from '../assets/avatar2.jpg'
import AvatarImage2 from '../assets/avatar3.jpg'
import AvatarImage3 from '../assets/avatar4.jpg'


function Projects() {
  return <YourProjects>
       <Project>
            <Avatar>
                 <img src={AvatarImage} alt="" />
            </Avatar>
            <Detail>
                 <Title>Logo design for baker</Title>
                 <SubTitle>1 day remaining</SubTitle>
            </Detail>
       </Project>
       <Project>
            <Avatar>
                 <img src={AvatarImage2} alt="" />
            </Avatar>
            <Detail>
                 <Title>Personal Branding projects</Title>
                 <SubTitle>5 days remaining</SubTitle>
            </Detail>
       </Project>
       <Project>
            <Avatar>
                 <img src={AvatarImage3} alt="" />
            </Avatar>
            <Detail>
                 <Title>Website for construction company</Title>
                 <SubTitle>1 week remaining</SubTitle>
            </Detail>
       </Project>

       <AllProjects>See all projects</AllProjects>
  </YourProjects>;
}


const YourProjects = styled.div`
height:70%;
background-color: white;
margin: 0;
padding: 1rem;
border-radius: 1rem;
overflow-y:hidden;
box-shadow: ${cardShadow};
transition : 0.3s ease-in-out;

&:hover{
     box-shadow:${hoverEffect};
}

`;
const Project = styled.div`
display: flex;
align-items:center;
margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
img{
     height:4rem;
     width: 4rem;
     border-radius:4rem;
}
`;
const Detail = styled.div`
margin-left: 1rem;

`;
const Title = styled.h3`
font-weight:500;

`;
const SubTitle = styled.h5`
font-weight:300;
`;
const AllProjects = styled.h5`
text-align: end;
color:${themeColor};
`;


export default Projects;
