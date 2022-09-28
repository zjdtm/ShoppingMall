import React from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";

import {
  TextField,
} from "../../../node_modules/@material-ui/core/index";

const Container = styled.div`
  background-color: aliceblue;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  margin :  0rem 10rem 0rem 10rem;
  padding-bottom: 5rem;
`;

const StyledText = styled(TextField)`
  width : 40%;
`;

const PrdocutRegister = ({ onChangeField }) => {
  return (
    <Container>
      상품이미지
      <FileBase64 type="file" multiple={false} onDone={({base64}) => onChangeField({key:"product_image", value:base64})}/>
      <StyledText
        label={"상품설명"}
        name="info"
        onChange={(e) => onChangeField({ key: "product_info", value: e.target.value })}
      />
      <StyledText
        label={"상품이름"}
        name="name"
        onChange={(e) => onChangeField({ key: "name", value: e.target.value })}
      />
      <StyledText
        label={"제조사"}
        name="manufacturer"
        onChange={(e) => onChangeField({ key: "manufacturer", value: e.target.value })}
      />
      <StyledText
        label={"가격"}
        name="price"
        onChange={(e) => onChangeField({ key: "price", value: e.target.value })}
      />
    </Container>
  );
};

export default PrdocutRegister;
