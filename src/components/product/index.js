import Wrapper from 'components/product/Wrapper';
import Thumbnail from 'components/product/Thumbnail';
import BrandName from 'components/product/BrandName';
import ProductName from 'components/product/ProductName';
import Discount from 'components/product/Discount';
import Price from 'components/product/Price';

const Product = ({ to, product, onClick }) => {
  return (
    <Wrapper to={to} onClick={onClick}>
      <Thumbnail src={product.imageUrl} alt={product.name} />
      <BrandName>{product.brand}</BrandName>
      <ProductName>{product.name}</ProductName>
      <Discount price={product.originPrice} ratio={product.discountRate} />
      <Price price={product.price} />
    </Wrapper>
  );
};

export default Product;
