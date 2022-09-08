import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { listProducts } from "../../modules/products";
import Product from "../../pages/Product";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { products, error, query, loading } = useSelector(
    ({ products, loading }) => ({
      products: products.products,
      error: products.error,
      query: products.query,
      loading: loading["products/LIST_PRODUCTS"],
    })
  );

  useEffect(() => {
    if (products) return;
    dispatch(listProducts({ products }));
  }, [dispatch, products, loading]);

  return (
    <Container>
      <Product
        loading={loading}
        error={error}
        products={
          Array.isArray(products) && query
            ? products.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              )
            : products
        }
      />
    </Container>
  );
};

export default ProductsContainer;
