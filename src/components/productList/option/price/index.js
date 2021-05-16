// components
import PriceWrapper from 'components/productList/option/price/Wrapper';
import OptionTitle from 'components/productList/option/OptionTitle';
import RadioBtn from 'components/productList/option/price/RadioBtn';

const PriceOption = ({ priceList, selectedId, onClick }) => {
  const PriceList = priceList.map(price => (
    <RadioBtn
      key={price.id}
      message={price.name}
      isSelected={price.id === selectedId}
      onClick={() => onClick(price)}
    />
  ));

  return (
    <PriceWrapper>
      <OptionTitle>가격</OptionTitle>
      <ul>
        <RadioBtn
          message="전체"
          isSelected={selectedId === null}
          onClick={() => onClick(null)}
        />
        {PriceList}
      </ul>
    </PriceWrapper>
  );
};

export default PriceOption;
