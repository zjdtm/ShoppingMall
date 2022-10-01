import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TagBox from "../../components/write/TagBox";
import { changeField } from "../../modules/product_register";

const ProductRegisterTagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.product_register.tags);

  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: "tags",
        value: nextTags,
      })
    );
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default ProductRegisterTagBoxContainer;
