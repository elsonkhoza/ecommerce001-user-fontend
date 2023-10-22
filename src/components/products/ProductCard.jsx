import { Card, Rate } from "antd";
import React from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

function ProductCard({ id, image, price, title, rating }) {
  return (
    <Link to={`/product/${id}`}>
      <Card
        hoverable
        cover={<img style={{ height: 250 }} alt={title} src={image} />}
        actions={[
          <HeartOutlined key="wishlist" />,
          <ShoppingCartOutlined key="cart" />,
        ]}
      >
        <Meta title={title} description={price} />
        <Rate style={{ marginTop: 8 }} disabled defaultValue={rating.rate} />
      </Card>
    </Link>
  );
}

export default ProductCard;
