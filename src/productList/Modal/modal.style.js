import styled from 'styled-components';

export const Modal = styled.div`
position:fixed;
top:10vh;
width:100vw;
height:90vh;
background:white;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
display:flex;
flex-direction:column;
align-items:center;
${({ hide }) => hide ? 'display:none;' : ''}
`;
export const ModalHeader = styled.div`
width:100%;
height:6rem;
display: flex;
align-items: center;
justify-content: space-between;
position:static;
margin:0;
padding:0;
opacity:0.8;
`;
export const Divider = styled.div`
background:#f5f5f5;
display:block;
margin:0;
padding:0;
height:0.15rem;
width:100vw;
`;
export const Button = styled.button`
text-align:center;
width:6rem;
font-size:2rem;
background:none;
outline:none;
border:none;
opacity:1;
`;
export const ModalTitle = styled.span`
font-size:1.8rem;
font-weight: bold;
`;
export const Background = styled.div`
position:fixed;
top:0;
width:100vw;
height:10vh;
background:gray;
opacity:0.5;
`;
export const Title = styled.span`
font-size: 1.8rem;
padding: 1rem;
font-weight: bold;
${({ rest }) => rest ? 'color:gray' : ''}
`;
export const Search = styled.input.attrs({ placeholder: 'search' })`
width: 74vw;
font-size:1.5rem;
outline: none;
border: none;
border-bottom: solid 0.2rem;`;
export const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
margin: 2rem 0;
width:60vw;
max-height:20rem;
overflow:scroll;
`;
export const Checkbox = styled.div`
width:1.3rem;
height:1.3rem;
background:${({ selected }) => selected ? 'black' : 'white'};
border:solid 0.15rem;
border-radius:3em;
display: inline-block;
margin-right:1rem;
`;
export const CheckLabel = styled.div`
font-size:1.5rem;
font-weight:${({ selected }) => selected ? 'bold' : '200'};
display:flex;
align-items:center;
`;
export const PriceRangeContainer = styled.label`
display:flex;
align-items: center;
`;
export const PriceRange = styled.input.attrs({ type: 'number' })`
width: 40vw;
font-size:1.5rem;
margin:2rem 0;
outline: none;
border: none;
border-bottom: solid 0.2rem;
`;
export const ApplyFilter = styled.button`
width: 90vw;
height: 4rem;
background: none;
border: solid 0.1rem;
margin-top:8rem;
`;