import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
width: 100vw;
height: 15rem;
background: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
}
`;

const Footer = () => {

    return (
        <Container>
            footer
        </Container>
    );
}


export default Footer;