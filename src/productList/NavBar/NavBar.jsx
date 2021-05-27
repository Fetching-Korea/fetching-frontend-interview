import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterOutlined, ArrowDownOutlined } from '@ant-design/icons';
import BigNavBar from './BigNavBar';
import SmallNavBar from './SmallNavBar';
import Filter from '../Modal/Filter'
import Sort from '../Modal/Sort'


export const CategoryButton = styled.button`
color:${({ selected }) => selected ? 'black' : 'gray'};
font-weight:${({ selected }) => selected ? 'bold' : 'normal'};
background:none;
border:none;
flex:none;
font-size:1.5rem;
cursor: pointer;
`;

const ButtonContainer = styled.div`
font-size: 1.4rem;
color: gray;
display:flex;
justify-content: flex-end;
`;

const Button = styled.span`
margin-right: 1.4rem;
margin-bottom:2rem;
border: solid 0.1rem;
border-radius: 1rem;
padding: 0.3rem 0.5rem;
`;


const NavBar = () => {

    const [hideFilter,setHideFilter]=useState(true);
    const [hideSort,setHideSort]=useState(true);

    return (
        <>
            <BigNavBar />
            <SmallNavBar />
            <ButtonContainer>
                <Button onClick={()=>setHideFilter(!hideFilter)}><FilterOutlined />필터</Button>
                <Button onClick={()=>setHideSort(!hideSort)}><ArrowDownOutlined />정렬</Button>
            </ButtonContainer>
            <Filter hide={hideFilter} setHide={setHideFilter}/>
            <Sort hide={hideSort} setHide={setHideSort}/>
            
            
        </>
    );
}


export default NavBar;