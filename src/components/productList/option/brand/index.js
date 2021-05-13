// components
import BrandWrapper from 'components/productList/option/brand/Wrapper';
import CheckboxWrapper from 'components/productList/option/brand/CheckboxWrapper';
import CheckboxBtn from 'components/productList/option/brand/CheckboxBtn';
import OptionTitle from 'components/productList/option/OptionTitle';

const BrandOption = ({ brandList, selectedBrandIdList, onClick }) => {
  const BrandList = brandList.map(brand => (
    <CheckboxBtn
      key={brand.name}
      message={brand.name}
      isSelected={~selectedBrandIdList.indexOf(brand.id)}
      onClick={() => onClick(brand.id)}
    ></CheckboxBtn>
  ));

  return (
    <BrandWrapper>
      <OptionTitle>브랜드</OptionTitle>
      <CheckboxWrapper>{BrandList}</CheckboxWrapper>
    </BrandWrapper>
  );
};

export default BrandOption;
