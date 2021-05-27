import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { Divider } from '../productList/Modal/modal.style';
import { CategoryButton } from '../productList/NavBar/NavBar';
import TopBar from '../productList/TopBar';

const Container = styled.div`
position:fixed;
top:0; 
background:white;
display:flex;
height:4rem;
padding-top:6rem;
overflow-x:auto;
height:4rem;
width: 100vw;
justify-content: flex-start;
`;

const BrandContainer = styled.div`
display:flex;
align-items:center;
`;
const BrandImg = styled.img`
width: 8rem;
padding:0 2rem;
`;
const BrandName = styled.span`font-size: 1.5rem;`;
const Initial = styled.span`
font-size:2rem;
font-weight:bold;
padding-left:2rem;
`;
const Margin = styled.div`
height:10rem;
`;

const Brands = () => {

    const [brands, setBrands] = useState([]);
    const [point, setPoint] = useState("A");
    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const abcRef = {};
    abc.forEach(v => { abcRef[v] = useRef(null) });

    useEffect(() => {
        fetch(`https://test.fetchingapp.co.kr/api/brands`)
            .then(res => res.json())
            .then(res => setBrands(res))
            .catch(err => console.log(err));
    }, []);

    const onClickAbc = (v) => {
        abcRef[v].current.scrollIntoView();
        setPoint(v);
    }

    return (
        <>
            <Container>
                {abc.map(v => <CategoryButton
                    onClick={e => onClickAbc(v)}
                    selected={v === point}>
                    {v}
                </CategoryButton>)}
            </Container>
            <TopBar />
            <Margin/>
            {
                abc.map(v => {
                    const target = brands.filter(brand => brand.name[0] === v);
                    return (
                        <>
                            <Initial ref={abcRef[v]}>{v}</Initial>
                            {
                                target.map(brand =>
                                    <BrandContainer>
                                        <BrandImg src={brand.image} />
                                        <BrandName>{brand.name}</BrandName>
                                    </BrandContainer>)
                            }
                            <Divider />
                        </>
                    );
                })
            }
        </>
    );
}

export default Brands;