import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCategory, fetchSmallCategories, fetchProducts } from '../../redux/action';
import { CategoryButton } from './NavBar';

const BigContainer = styled.div`
display:flex;
height:4rem;
padding-top:6rem;
justify-content: space-around;
`;

const BigNavBar = ({ category, setCategory, fetchSmallCategories, fetchProducts, filter }) => {

    const BigCategory = [
        { id: 14, name: "의류" },
        { id: 15, name: "가방" },
        { id: 16, name: "신발" },
        { id: 17, name: "악세사리" },
    ];

    useEffect(() => {
        fetchSmallCategories(14);
        fetchProducts([0, 14, -1],filter);
    }, []);

    return (
        <BigContainer>
            {/* <CategoryButton>전체</CategoryButton> */}
            {BigCategory.map(v => <CategoryButton
            key={v.id}
                onClick={() => {
                    setCategory([0, v.id, -1]);
                    fetchSmallCategories(v.id);
                    fetchProducts([0, v.id, -1],filter);
                }}
                selected={v.id === category[1]}>{v.name}</CategoryButton>)}
        </BigContainer>
    );
}



const mapStateToProps = ({ category, filter }) => {
    return {
        category,
        filter,
    }
}
const mapDispatchToProps = {
    setCategory,
    fetchSmallCategories,
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(BigNavBar);