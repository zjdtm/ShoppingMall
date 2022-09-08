import styled from "styled-components";
import { mobile } from "../../responsive";
import {style} from "../../data";

const Container = styled.div`
  margin-top: 100px;
  height: 100vh;
  background-color: #f5fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 30px;
  margin-bottom: 20px;
  color:#c8c8c8;
`;

const StyleContainer = styled.div`
  border : black;
  width: 60%;
  height: 80vh;
  background-color: #f5fafd;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const Image = styled.img`
  object-fit: cover;
  width : 20%;
  height: 40%;
  &:hover {
    filter: brightness(50%);
  }
`;



const Style = () => {
  return (
    <Container>
      <Title>STYLE</Title>
      <StyleContainer>
          {style.map((item) => (
            <Image src={item.img} alt="이미지" key={item.id}/>
          ))}        
      </StyleContainer>
    </Container>
  );
};

export default Style;
