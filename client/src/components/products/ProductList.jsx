import React from "react";
import styled from "styled-components";
// import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import { mobile } from "../../responsive";
import Style from "../common/Style";
import Footer from "../common/Footer";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "../../../node_modules/@material-ui/icons/index";

const ProductListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ItemSubContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductItem = ({ products }) => {
  return (
    <div>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {products.map((item) => (
        <ItemContainer>
          <ItemSubContainer>
            <Circle>
              <Image src={item.img} key={item.id} />
              <Info>
                <Icon>
                  <ShoppingCartOutlined />
                </Icon>
                <Icon>
                  <SearchOutlined />
                </Icon>
                <Icon>
                  <FavoriteBorderOutlined />
                </Icon>
              </Info>
            </Circle>
            {/* <span>{item.title}</span>
            <span>{item.price}</span> */}
          </ItemSubContainer>
        </ItemContainer>
      ))}
      ;
      <Style />
      <Footer />
    </div>
  );
};

const ProductList = ({ products, loading, error }) => {
  if (error) {
    return <ProductListBlock>에러가 발생했습니다.</ProductListBlock>;
  }
  return (
    <ProductListBlock>
      {!loading && products && (
        <div>
          <Button cyan to="/product/register">
            상품 등록
          </Button>

          <ProductItem products={products} key={products.id} />
        </div>
      )}
    </ProductListBlock>
  );
};

export default ProductList;
