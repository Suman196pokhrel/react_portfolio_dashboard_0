import React from "react";
import styled from "styled-components";
import {FiSearch} from 'react-icons/fi'


function NavBar() {
  return (
    <NavBarContainer>
      <Text>
        Good Morning,
        <span>Suman</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type='text' placeholder="Search for projects" />
      </InputContainer>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`

display : flex;
justify-content: space-between;
align-items: center;
height: 10%;

`;
const Text = styled.h1`
span{
     font-weight:500;
     color: #484258
}

`;
const InputContainer = styled.div`
display: flex;

`;
const Icon = styled.div`
height: 3rem;
width : 3rem;
background-color : #dce4ff;
display: flex;
align-items : center;
justify-content : center;
border-top-left-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
svg{
     color: #555555;
}
`;
const Input = styled.input`

border : none;
background-color : #dce4ff;
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
&:focus{
     border:none;
     outline: none;
}

`;

export default NavBar;
