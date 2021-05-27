import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCategory, fetchProducts } from '../../redux/action';
import { CategoryButton } from './NavBar';

const SmallContainer = styled.div`
display:flex;
overflow-x:auto;
height:4rem;
justify-content: flex-start;
`;

const SmallNavBar = ({ category, setCategory, smallCategories, fetchProducts, filter }) => {

    const onClickCategory = (category)=>{
        setCategory(category);
        fetchProducts(category, filter);
    }

    return (
        <SmallContainer>
            <CategoryButton
                key={-1}
                onClick={() => onClickCategory([category[0], category[1], -1])}
                selected={category[2] === -1}>
                전체
            </CategoryButton>
            {smallCategories.map((v,i) =>
                <CategoryButton
                    key={'SC'+v.id}
                    onClick={() => onClickCategory([category[0], category[1], v.id])}
                    selected={category[2] === v.id}>
                    {v.name}
                </CategoryButton>)}
        </SmallContainer>
    );
}


const mapStateToProps = ({ category, smallCategories, filter }) => {
    return {
        category,
        smallCategories,
        filter,
    }
}
const mapDispatchToProps = {
    setCategory,
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallNavBar);