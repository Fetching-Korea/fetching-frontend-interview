import React, { useEffect, useState } from 'react';
import { RedoOutlined, CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setFilter, fetchProducts } from '../../redux/action';
import {
    Modal,
    ModalHeader,
    Divider,
    Button,
    ModalTitle,
    Background,
    Title,
    Search,
    CheckboxContainer,
    Checkbox,
    CheckLabel,
    PriceRangeContainer,
    PriceRange,
    ApplyFilter,
} from './modal.style';


const Filter = ({ hide, setHide, setFilter, filter, fetchProducts, category }) => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch(`https://test.fetchingapp.co.kr/api/brands`)
            .then(res => res.json())
            .then(res => setBrands(res))
            .catch(err => console.log(err));
    }, []);

    const [ibrandIdList, setibrandIdList] = useState(filter.brandIdList);
    const [isearchkey, setiSearchKey] = useState('');
    const [iminimumPrice, setiminimumPrice] = useState(filter.minimumPrice);
    const [imaximumPrice, setimaximumPrice] = useState(filter.maximumPrice);

    return (
        <Modal hide={hide}>
            <Background />
            <ModalHeader>
                <Button onClick={() => setHide(!hide)}><CloseOutlined /></Button>
                <ModalTitle>상품 필터</ModalTitle>
                <Button onClick={() => {
                    setibrandIdList([]);
                    setiminimumPrice(0);
                    setimaximumPrice(100000000);
                }}><RedoOutlined /></Button>
            </ModalHeader>
            <Divider />
            <Title>브랜드</Title>
            <Search onChange={e => setiSearchKey(e.target.value)} />
            <CheckboxContainer>
                {
                    brands.filter(el => el.name.includes(isearchkey.toUpperCase())).map(v =>
                        <CheckLabel
                            key={v.id}
                            selected={ibrandIdList.includes(v.id)}
                            onClick={() => {
                                ibrandIdList.includes(v.id) ? setibrandIdList((prev) => prev.filter((el) => el !== v.id)) : setibrandIdList((prev) => [...prev, v.id]);
                            }}>
                            <Checkbox selected={ibrandIdList.includes(v.id)} />
                            {v.name}
                        </CheckLabel>)
                }
            </CheckboxContainer>
            <Divider />
            <Title>가격</Title>
            <PriceRangeContainer>
                <PriceRange onChange={e => setiminimumPrice(e.target.value)} value={iminimumPrice} /><CheckLabel>원</CheckLabel>
            </PriceRangeContainer>
            <CheckLabel>~</CheckLabel>
            <PriceRangeContainer>
                <PriceRange onChange={e => setimaximumPrice(e.target.value)} value={imaximumPrice} /><CheckLabel>원</CheckLabel>
            </PriceRangeContainer>
            <ApplyFilter onClick={() => {

                //여기서 리덕스 실행
                setFilter({
                    brandIdList: ibrandIdList,
                    minimumPrice: iminimumPrice,
                    maximumPrice: imaximumPrice,
                    sort: filter.sort,
                });
                fetchProducts(category, {
                    brandIdList: ibrandIdList,
                    minimumPrice: iminimumPrice,
                    maximumPrice: imaximumPrice,
                    sort: filter.sort,
                });
                setHide(!hide);
            }}>필터 적용하기</ApplyFilter>
        </Modal>
    );
}


const mapStateToProps = ({ filter, category }) => {
    return {
        filter,
        category,
    }
}
const mapDispatchToProps = {
    setFilter,
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);