import React from 'react';

import styled from 'styled-components';
import Badge from './Badge';
import {cardShadow,hoverEffect} from '../utils'
import AvatarImage from '../assets/avatar5.jpg'
import AvatarImage2 from '../assets/avatar6.jpg'
import AvatarImage3 from '../assets/avatar7.jpg'




function Invoices() {
  return <InvoicesContainer>
       <CardContent>
            <Invoice>
                 <Info>
                      <Avatar>
                           <img src={AvatarImage}  alt=""/>
                      </Avatar>
                      <TextContainer>
                           <Title> Sabin Adhikari</Title>
                           <SubTitle>ABC Holdings</SubTitle>
                      </TextContainer>
                 </Info>
                 <Container>
                      <Badge content="Paid" paid />
                      <Price>$1,200.87</Price>
                 </Container>
            </Invoice>

            <Invoice>
                 <Info>
                      <Avatar>
                           <img src={AvatarImage2}  alt=""/>
                      </Avatar>
                      <TextContainer>
                           <Title> Parangat Narsingh Pradhan</Title>
                           <SubTitle>Faulty navbar in website</SubTitle>
                      </TextContainer>
                 </Info>
                 <Container>
                      <Badge content="Late" late/>
                      <Price>$1,800.87</Price>
                 </Container>
            </Invoice>

            <Invoice>
                 <Info>
                      <Avatar>
                           <img src={AvatarImage3}  alt=""/>
                      </Avatar>
                      <TextContainer>
                           <Title> Rijesh Shrestha</Title>
                           <SubTitle>Gre practice test site </SubTitle>
                      </TextContainer>
                 </Info>
                 <Container>
                      <Badge content="Paid" paid/>
                      <Price>$2000.87</Price>
                 </Container>
            </Invoice>

            

       </CardContent>
  </InvoicesContainer>;
}


const InvoicesContainer = styled.div`
width: 35rem;
border-radius: 1rem;
margin-top: 1rem;
background-color: white;
// height: 170%;
box-shadow: ${cardShadow};
transition : 0.3s ease-in-out;

&:hover{
     box-shadow:${hoverEffect};
}
`;
const CardContent = styled.div``;
const Invoice = styled.div`
display : flex;
align-items: center;
justify-content: space-betwee;
margin: 0.4rem;
padding-top: 0.6rem;

`;
const Info = styled.div`
display:flex;
align-items: center;
width: 60%;
`;
const Avatar = styled.div`
img{
     height:3.5rem;
     width: 3.5rem;
     border-radius: 3.5rem;
}
`;
const TextContainer = styled.div`
margin-left: 1rem;

`;
const Title = styled.h4`

`;
const SubTitle = styled.h5`
font-weight: 400;
`;
const Container = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
align-items: center;
`;
const Price = styled.div``;


export default Invoices;
