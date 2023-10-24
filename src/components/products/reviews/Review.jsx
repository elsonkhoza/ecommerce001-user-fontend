import { Avatar, Flex, Rate, Typography } from "antd";
import React from "react";

function Review({ image, rate, comment, date }) {
  return (
    <Flex gap={"small"}>
      <Avatar icon={image}></Avatar>
      <Flex gap="small" vertical>
        <Rate disabled defaultValue={rate} />
        <div>{date}</div>
        <Typography.Text>{comment}</Typography.Text>
      </Flex>
    </Flex>
  );
}

export default Review;
