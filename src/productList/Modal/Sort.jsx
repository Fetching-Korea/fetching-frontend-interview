import React, { useState } from 'react';
import { RedoOutlined, CloseOutlined } from '@ant-design/icons';
import { setFilter, fetchProducts } from '../../redux/action';
import {
    Modal,
    ModalHeader,
    Divider,
    Button,
    ModalTitle,
    Background,
    Title,
} from './modal.style';
import { connect } from 'react-redux';


const Sort = ({ hide, setHide, filter, setFilter,category,fetchProducts }) => {

    const sorting = ['최신순', '할인율순', '낮은가격순', '높은가격순'];

    const [isort, setisort] = useState(filter.sort);

    return (
        <Modal hide={hide}>
            <Background />
            <ModalHeader>
                <Button onClick={() => setHide(!hide)}><CloseOutlined /></Button>
                <ModalTitle>정렬</ModalTitle>
                <Button onClick={() => setisort(0)}><RedoOutlined /></Button>
            </ModalHeader>
            <Divider />
            {
                sorting.map((v, i) => <Title
                    key={i}
                    onClick={() => {
                        setisort(i);

                        //여기서 리덕스 실행
                        setFilter({
                            brandIdList: filter.brandIdList,
                            minimumPrice: filter.minimumPrice,
                            maximumPrice: filter.maximumPrice,
                            sort: i,
                        });
                        fetchProducts(category, {
                            brandIdList: filter.brandIdList,
                            minimumPrice: filter.minimumPrice,
                            maximumPrice: filter.maximumPrice,
                            sort: i,
                        });

                        setHide(!hide);
                    }} rest={i !== isort} >{v}</Title>)
            }
        </Modal>
    );
}


const mapStateToProps = ({ filter,category }) => {
    return {
        filter,
        category,
    }
}
const mapDispatchToProps = {
    setFilter,
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);