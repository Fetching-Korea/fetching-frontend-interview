import React from 'react'
import styled from 'styled-components';
import { MenuOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';

const Div = styled.div`
width:100vw;
height:5rem;
background :white;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-weight:100;
position:fixed;
`;

const Icons = styled.div`
font-size: 2rem;
width: 8rem;
display: flex;
justify-content: space-evenly;
align-items: center;

`;

const Span = styled.span`   
font-size: 2rem;
font-weight: 900;
`;

const TopBar = () => {
    return (
        <Div>
            <Icons>
                <MenuOutlined/>
                <SearchOutlined />
            </Icons>
            <Span>FETCHING</Span>
            <Icons>
                <HeartOutlined />
                <ShoppingOutlined />
            </Icons>
        </Div>
    );
}


export default TopBar;