import { RemoveCircleOutline } from "@material-ui/icons";
import styled from "styled-components";
import Payment from "../../payment/Payment";
import { mobile } from "../../responsive";

const Container = styled.div`
  ${mobile({ width: "20%", display : "flex"})}
`;

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 200px;
  flex-wrap: wrap;
  ${mobile({ width : "20%", height : "100%", 
      margin : "50%", display : "flex", 
      flexDirection : "column"
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({ display : "none"})}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ display : "none"})}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom : 10px;
  /* ${mobile({ flexDirection: "column" })} */
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const RemoveButton = styled.button`
  /* justify-content: center; */
  background-color: white;
  width: 90px;
  height: 50px;
  margin-top: 80px;
  margin-right: 50px;
  padding: 8px 30px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  color: black;
  font-weight: 500;
  &:hover {
      
      transform: scale(1.1);
    }
`;

const Image = styled.img`
  width: 200px;
  /* ${mobile({ width : "150px"})} */
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* ${mobile({ width : "50px"})} */
`;

const ProductName = styled.span``;

const ProductSize = styled.span`
 /* ${mobile({ fontSize : "15px"})} */
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ${mobile({ flexDirection : "row", margin : "0 auto"})} */
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  /* ${mobile({ margin: "5px 15px" })} */
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
  /* ${mobile({ padding : "50px"})} */
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Cart = ({ user, loading, carts, handleClick }) => {
    if(!loading && Array.isArray(carts)){
    let total = 0;
    carts.forEach((product) => {
      total += product.price * product.quantity;
    });

    return (
      <Container>
        <Wrapper>
            <Title>장바구니</Title>
            <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag</TopText>
                <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                  <Info>
                  {Array.isArray(carts)
                  ? carts.map((item) => (      
                    <Product key={item.productId}>
                    <ProductDetail>
                        <Image src={item.product_image} alt="이미지"/>
                        <Details>
                        <ProductName>
                             {item.productTitle}
                        </ProductName>
                        <ProductSize>
                            SIZE : {item.size}
                        </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.quantity}</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>{item.price}원</ProductPrice>
                    </PriceDetail>
                    <RemoveButton onClick={() => handleClick(user._id, item.productId)}>
                          <RemoveCircleOutline className="Remove"/>
                        </RemoveButton>
                    </Product>
                      )):null}
                      <Hr/>
                    </Info>
            <Summary>
                <SummaryTitle>주문 요약</SummaryTitle>
                <SummaryItem>
                <SummaryItemText>합 계</SummaryItemText>
                <SummaryItemPrice>{total.toLocaleString()} 원</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryItemText>배송비</SummaryItemText>
                <SummaryItemPrice>3000원</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                <SummaryItemText>총 합계</SummaryItemText>
                <SummaryItemPrice>{(total+3000).toLocaleString()} 원</SummaryItemPrice>
                </SummaryItem>
                <Payment username={user.username} total={(total+3000) }></Payment>
            </Summary>
            </Bottom>
        </Wrapper>
      </Container>
      );
    }
};

export default Cart;
