import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api/productsApi";
import { selectProduct } from "../redux/actions/productAction";
import Container from "../components/Container";
import { Button, Col, Divider, Flex, Image, Rate, Row, Tabs, Typography } from "antd";
import { HeartOutlined, PlusOutlined } from "@ant-design/icons";

const items = [
    {
      key: '1',
      label: 'Reviews',
      children: 'Product Reviews',
    },
    {
      key: '2',
      label: 'Details',
      children: 'Product Details',
    },
    {
      key: '3',
      label: 'Sizes',
      children: 'Product Size',
    },
  ];
function Product() {
  const { id } = useParams();
  const {rate,setRate}=useState(0);
  let product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  console.log("The ID", id);
  const fetchProduct = async (id) => {
    const data = await getSingleProduct(id);
    dispatch(selectProduct(data));
    setRate((product.rating).rate);
  };
  console.log("selected: ", product);

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <Container>
      <Row >
        <Col span={12}>
          <Image
            src={product.image}
          />
        </Col>
        <Col span={12}>
            <Flex style={{paddingLeft:20}} gap={'middle'} vertical>
            <h1>{product.title}</h1>
            <Rate disabled defaultValue={rate} />
            <Typography.Text>
                {"Categories: "+"Men, Clothing, Begs"}
                </Typography.Text>
            <h4 style={{color:'green'}}>{"In Stock (56)"}</h4>
            <Divider/>
            <Typography.Text>
                {product.description}
            </Typography.Text>
            <h2>{"R"+product.price}</h2>
            <Flex gap='small'>
            <Button icon={<HeartOutlined />} size='large' >
               Wishlist
            </Button>
            <Button icon={<PlusOutlined />} size='large' type="primary">
               Add to cart
            </Button>
            </Flex>
            <Tabs defaultActiveKey="1" items={items}/>
            </Flex>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
