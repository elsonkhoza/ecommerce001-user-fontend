import React from "react";
import FeaturedCarousel from "../components/home/FeaturedCarousel";
import ProductsList from "../components/home/ProductsList";
import Container from "../components/Container";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";

function Home() {
  return (
    <div>
      <FeaturedCarousel />
      <Container>
        <Flex
          justify="space-between"
          align="center"
          style={{ marginTop: 100,marginBottom:100 }}
        >
          <h1>GET WHAT YOU LOOKING FOR</h1>
          <div style={{ padding: 8, color: "white", backgroundColor: "red" }}>
            <h1 >PERFECT SALE!</h1>
          </div>
        </Flex>
        <ProductsList />
      </Container>
    </div>
  );
}

export default Home;
