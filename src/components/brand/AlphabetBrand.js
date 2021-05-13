import styled from 'styled-components';
// components
import Alphabet from 'components/brand/Alphabet';
import BrandLinkWrapper from 'components/brand/BrandLinkWrapper';
import BrandLink from 'components/brand/BrandLink';

const AlphabetBrand = ({ alphabet, brandList }) => {
  const BrandLinkList = brandList.map(brand => (
    <BrandLink key={brand.id} to={`/brand/${brand.id}`} message={brand.name} />
  ));

  return (
    <Wrapper>
      <Alphabet data-char={alphabet}>{alphabet}</Alphabet>
      <BrandLinkWrapper>{BrandLinkList}</BrandLinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

export default AlphabetBrand;
