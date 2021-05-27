import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.span`
position: fixed;
top: 45vh;
left: 0;
width: 100vw;
text-align: center;
font-size: 3rem;
transform: rotateY(0);
${({loading})=>loading?'transform: rotateY(720deg)':'visibility:hidden'};
transition: 6s linear transform;
`;

const Spinner = ({loading}) => {
    return(
        <Container loading={loading}>F E T C H I N G</Container>
    );
}

const mapStateToProps = ({ loading }) => {
    return {
        loading
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Spinner);