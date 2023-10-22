import { Col, Layout, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productAction";
import { getProducts } from "../../api/productsApi";
import ProductCard from "../products/ProductCard";
import { Content } from "antd/es/layout/layout";

function ProductsList() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const data = await getProducts();
    dispatch(setProducts(data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <Row style={{ marginTop: 50 }} gutter={[16, 16]}>
      {products.map((p) => {
        return (
          <Col key={p.id} span={6}>
            <ProductCard
              id={p.id}
              image={p.image}
              title={p.title}
              price={"R " + p.price}
              rating={p.rating}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default ProductsList;
