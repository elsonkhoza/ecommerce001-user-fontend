import { Col, Row } from 'antd'
import React from 'react'

function Container({children}) {
  return (
    <Row justify='center' align='middle'>
        <Col span={18}>{children}</Col>
    </Row>
  )
}

export default Container