import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchProductsFromBookmark } from '../redux/action';

const Container = styled.div`
width:45vw;
height:32rem;
display:flex;
flex-direction: column;
text-decoration:none;
`;

const Img = styled.img`
width:100%;
height: 21rem;
object-fit:contain;
`;
const Brand = styled.span`font-size: 1.3rem; font-weight:600;`;
const ProductName = styled.span`font-size: 1.1rem; padding:0.3rem 0 0.2rem;`;
const OriginalPrice = styled.span`color:gray; text-decoration:line-through;`;
const DiscountRate = styled.span`color:red; padding-left:0.5rem;`;
const Price = styled.span`font-size: 1.1rem`;

const Product = ({ data }) => {

    const { brand, discountRate, imageUrl, name, originPrice, price } = data;

    return (
        <Container>
            <Img src={imageUrl} />
            <Brand>{brand}</Brand>
            <ProductName>{name}</ProductName>
            {
                Math.round(discountRate) !== 0 ?
                    <div>
                        <OriginalPrice>{originPrice.toLocaleString('ko-KR')}원</OriginalPrice>
                        <DiscountRate>{Math.round(discountRate)}%</DiscountRate>
                    </div> : ''
            }
            <Price>{price.toLocaleString('ko-KR')}원</Price>
        </Container>
    );
}

const LoadMoreButton = styled.button`
width: 90vw;
height: 4rem;
background: none;
border: solid 0.1rem;
margin-bottom:8rem;
`;

const ProductContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const SLink = styled(Link)`
text-decoration: none !important;
color: black;
`;

const ProductList = ({ category, products, bookmark, fetchProductsFromBookmark, filter }) => {

    const loadMore = () => {
        fetchProductsFromBookmark(category, bookmark, products, filter)
    }

    return (
        <ProductContainer>
            {/* {products.map(v => <Link to={`/fetching-frontend-interview/productList/${v.id}`}><Product key={v.id} data={v} /></Link>)} */}
            {products.map(v => <SLink to={`/productList/${v.id}`} style={{textDecoration: ' !important'}}><Product key={v.id} data={v} /></SLink>)}
            <LoadMoreButton onClick={loadMore}>
                Load More
            </LoadMoreButton>
        </ProductContainer>
    );
}


const mapStateToProps = ({ category, products, bookmark, filter }) => {
    return {
        category,
        products,
        bookmark,
        filter,
    }
}
const mapDispatchToProps = {
    fetchProductsFromBookmark,
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);