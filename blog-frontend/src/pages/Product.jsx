import {
  SearchOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "../../node_modules/react-router-dom/index";

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

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
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
  object-fit: cover;
  width: 100%;
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

const Title = styled.div``;
const Price = styled.div``;

const Item = ({item}) => {
  const naviagte = useNavigate();
  return (
    <Container>
      <Circle />
      <Image src={item.product_image}/>
      <Title>{item.name}</Title>
      <Price>{item.price} 원</Price>
      <Info>
        <Icon onClick={() => naviagte(`/products/${item._id}`)}>
          <SearchOutlined/>
        </Icon>
      </Info>
    </Container>
  );
}


const Product = ({ products, loading, error }) => {
  
  if(error) {
    return <>에러가 발생했습니다.</>;
  }
  return (
    <>
      {!loading && products && (
        
        <>
          {
            products.map((item) => (
              <Item item={item} key={item._id}/>
            ))
          }
        </>
      )}
    </>
  );
};

export default Product;
