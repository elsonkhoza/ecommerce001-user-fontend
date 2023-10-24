import { Button, Carousel, Col, Flex, Row } from "antd";
import React, { useState } from "react";
import FM1 from "../../assets/images/featured-image-1.jpg";
import FM2 from "../../assets/images/featured-image-2.jpg";
import Container from "../Container";
import Title from "antd/es/typography/Title";

const contentStyle = {
  height: "calc(100vh - 70px)",
  backgroundSize: "cover",
};
function FeaturedCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <div style={{ ...contentStyle, backgroundImage: `url(${FM1})` }}>
          <Container>
            <Row style={{ height: "calc(100vh - 70px)" }} align="middle">
              <Col span={12}>
                <Flex
                  gap="small"
                  align="center"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: 50,
                  }}
                  vertical
                  justify="center"
                >
                  <div
                    style={{
                      padding: 8,
                      color: "white",
                      backgroundColor: "red",
                    }}
                  >
                    <h3>BEST TOP SELLER</h3>
                  </div>
                  <h1>CHOTHES</h1>
                  <h1 style={{ fontFamily: "Pacifico, cursive" }}>FOR WOMEN</h1>
                  <Button>
                    <h3>SHOP NOW</h3>
                  </Button>
                </Flex>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <div
          style={{
            ...contentStyle,
            backgroundImage: `url(${FM2})`,
            backgroundPosition: "bottom",
          }}
        >
          <Container>
            <Row
              style={{ height: "calc(100vh - 70px)" }}
              align="middle"
              justify="end"
            >
              <Col span={12}>
                <Flex
                  gap="small"
                  align="center"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: 50,
                  }}
                  vertical
                  justify="center"
                >
                  <div
                    style={{
                      padding: 8,
                      color: "white",
                      backgroundColor: "red",
                    }}
                  >
                    <h3>BEST TOP SELLER</h3>
                  </div>
                  <h1>TOP SHOES FOR YOU</h1>
                  <h1 style={{ fontFamily: "Pacifico, cursive" }}>FLEX!</h1>
                  <Button>
                    <h3>SHOP NOW</h3>
                  </Button>
                </Flex>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Carousel>
  );
}

export default FeaturedCarousel;
