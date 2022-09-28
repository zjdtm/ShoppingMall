import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { Add, Remove } from '../../../node_modules/@material-ui/icons/index';
import { mobile } from '../../responsive';
import SizeModal from './SizeModal';
// import CouponModal from './CouponModal';


const Container = styled.div`
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  border : 1px solid gray;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-right: 50px;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Hr = styled.hr`
  width: 70%;
  margin-left : 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 80%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const Modal = styled.span`
  cursor: pointer;
  & + & {
    margin-left: 55%;
  }
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`;

const AddContainer = styled.div`
  margin : 8% 0;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const FilterSizeTest = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 88%;
  height: 30vh;
`;

const FilterSizeOptionTest = styled.label`
  & {
    input[type="radio"]{
      display: none;
      & + span {
        display: inline-block;
        padding: 0px 10px;
        width: 50px;
        height: 35px;
        line-height: 33px;
        font-weight: 500;
        text-align: center;
        color: #222222;
        border: 1px solid #9f9f9f;
        background: none;   
        cursor: pointer;
      }
      &:checked {
        & + span {
          color: #fff;
          border: 1px solid #fe1448;
          background: #fe1448;
        }
      }
    }
  }
  width: 30%;
  background-color: white;
  text-align: center;
  margin : auto;
  border:none;
  padding: 15px 0px 15px 0px;
  cursor: pointer;
`;

const AmountContainer = styled.div`
  background-color: gray;
  color : white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  background-color: #CCCCCC;
  color:black;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
`;

const Desc = styled.img`
  background-color: white;
  width:60%;
  height: 100%;
  margin: auto;
  & + & {
    margin-top:50px;
  }
`;

const ProductDetail = ({product, size, quantity ,handleQuantity, handleClick, handleSize}) => {
  const [Sizemodal, setSizeModal] = useState(false);
  // const [Couponmodal, setCouponModal] = useState(false);
  const onSizeClick = () => {
    setSizeModal(true);
  };
  // const onCouponClick = () => {
  //   setCouponModal(true);
  // }
  const onSizeCancel = () => {
    setSizeModal(false);
  };
  const onSizeConfirm = () => {
    setSizeModal(false);
  };
  // const onCouponCancel = () => {
  //   setCouponModal(false);
  // };
  // const onCouponConfirm = () => {
  //   setCouponModal(false);
  // };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.product_image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Price>{(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>
          <Hr/>
          <Modal onClick={onSizeClick}>사이즈 가이드</Modal>
          <SizeModal
                visible={Sizemodal}
                onConfirm={onSizeConfirm}
                onCancel={onSizeCancel}
              />             
          {/* <Modal onClick={onCouponClick}>쿠폰</Modal>
          <CouponModal
                visible={Couponmodal}
                onConfirm={onCouponConfirm}
                onCancel={onCouponCancel}
              /> */}
          <FilterContainer>
            <Filter>              
              <FilterTitle>Size</FilterTitle>
              <FilterSizeTest>
                {product.size.map((size) => (
                  <FilterSizeOptionTest>
                    <input type="radio" name="sizecheck" size={size} key={size} onClick={()=>handleSize(size)}/>
                    <span>{size}</span>
                  </FilterSizeOptionTest>
                ))}
              </FilterSizeTest>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>              
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>장바구니에 담기</Button>
        </InfoContainer>        
      </Wrapper>
      <Desc src="/assets/orderpage.jpg" alt="이미지" style={{display:'block'}}/>
      {/* <Desc src={product.product_info} alt="이미지" style={{display:'block'}}/> */}
  </Container>
  )
}

export default ProductDetail