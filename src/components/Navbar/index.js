import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons"
import {
  Avatar,
  Dropdown,
  Menu,
  Badge,
  Col,
  Input,
  Row,
  Typography
} from "antd"
import React, { useState } from "react"
import style from "./style.module.css"

export const Navbar = () => {
  const [search, setsearch] = useState("")
  const { Title, Text } = Typography

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <div>User name (Position)</div>
        },
        {
          key: "2",
          label: <div>Logout</div>,
          icon: <PoweroffOutlined />
        }
      ]}
    />
  )

  return (
    <Row className={style.container} justify="space-between" align="middle">
      <Col
        lg={{ span: 3 }}
        md={{ span: 3 }}
        sm={{ span: 4, order: 0 }}
        xs={{ span: 10, order: 0 }}
      >
        <Title className={style.title} level={1}>
          Logo
        </Title>
      </Col>

      <Col
        lg={{ span: 4 }}
        md={{ span: 0 }}
        sm={{ span: 0, order: 1 }}
        xs={{ span: 0 }}
      >
        <Title className={style.title} level={1}>
          Title
        </Title>
      </Col>

      <Col
        lg={{ span: 10 }}
        md={{ span: 10 }}
        sm={{ span: 12, order: 2 }}
        xs={{ span: 24, order: 2 }}
      >
        <Input
          value={search}
          onChange={e => setsearch(e.target.value)}
          className={style.searchInput}
          placeholder="Search"
          suffix={<SearchOutlined className={style.icon} />}
        />
      </Col>

      <Col
        lg={{ span: 5 }}
        md={{ span: 8 }}
        sm={{ span: 8, order: 3 }}
        xs={{ span: 5, order: 1 }}
      >
        <Row gutter={2} justify="space-evenly" align="middle">
          <Col>
            <Badge count={1} size="small" className={style.mobileHide}>
              <Avatar></Avatar>
            </Badge>
            <Dropdown overlay={menu} className={style.mobileShow}>
              <Badge count={1} size="small">
                <Avatar></Avatar>
              </Badge>
            </Dropdown>
          </Col>
          <Col className={style.mobileHide}>
            <div>User name</div>
            <div>Position</div>
          </Col>
          <Col className={style.mobileHide}>
            <PoweroffOutlined className={style.icon} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

