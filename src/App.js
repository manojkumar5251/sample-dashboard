import {
  DingdingOutlined,
  FacebookOutlined,
  SkypeOutlined
} from "@ant-design/icons"
import { Anchor, Col, Progress, Row, Typography } from "antd"
import React from "react"
import { Navbar } from "./components/Navbar"
import { TitLedCard } from "./components/TitledCard"
import style from "./app.module.css"

function App() {
  const { Link } = Anchor

  return (
    <React.Fragment>
      <Navbar />
      <Row justify="start" style={{ marginLeft: 20 }}>
        <Col lg={{ span: 6 }} md={10} xs={24} sm={10}>
          <Typography.Title>Dashboard 1</Typography.Title>
        </Col>
        <Col lg={12} md={10} xs={24} sm={10}>
          <Typography.Title>Subtitle</Typography.Title>
        </Col>
      </Row>

      <Row wrap gutter={12} justify="space-around" style={{ width: "100%" }}>
        <Col
          lg={{ span: 6, order: 0 }}
          md={{ span: 5, order: 0 }}
          xs={24}
          sm={24}
          style={{ margin: "12px 0px" }}
        >
          <Anchor affix={false}>
            <Link title="Dashboard 2" href="#dashboard-2" />
            <Link title="Dashboard 3" href="#dashboard-3" />
            <Link title="Dashboard 4" href="#dashboard-4" />
            <Link title="Dashboard 5" href="#dashboard-5" />
          </Anchor>
        </Col>

        <Col
          lg={{ span: 12, order: 1 }}
          md={{ span: 18, order: 2 }}
          xs={24}
          sm={24}
          style={{ margin: "12px 0px" }}
        >
          <TitLedCard>
            <Row justify="space-evenly">
              <Col style={{ margin: "12px 0px" }}>
                <Progress
                  type="circle"
                  percent={20}
                  width="10rem"
                  format={e => `${e}% Completed`}
                  strokeColor={{
                    "0%": "orange",
                    "100%": "#87d068"
                  }}
                />
                <Typography.Title level={5} style={{ textAlign: "center" }}>
                  Progress Status
                </Typography.Title>
              </Col>
              <Col style={{ margin: "12px 0px" }}>
                <Progress
                  type="circle"
                  percent={75}
                  width="10rem"
                  format={e => `${e}% Completed`}
                  strokeColor={{
                    "0%": "orange",
                    "100%": "#87d068"
                  }}
                  status="active"
                />
                <Typography.Title level={5} style={{ textAlign: "center" }}>
                  Progress Status
                </Typography.Title>
              </Col>
            </Row>
          </TitLedCard>
        </Col>

        <Col
          lg={{ span: 6, ordr: 2 }}
          md={{ span: 10, order: 1 }}
          xs={24}
          sm={24}
          style={{ margin: "12px 0px" }}
        >
          <TitLedCard>
            <Row justify="center">
              <Progress
                percent={60}
                width="10rem"
                success={{ percent: 30, strokeColor: "red" }}
                type="circle"
              />
            </Row>

            <Row justify="space-around" style={{ marginTop: 15 }}>
              <Col>
                <Typography.Text>
                  <Row align="middle" justify="space-between">
                    <div
                      style={{
                        height: 7,
                        width: 7,
                        backgroundColor: "red",
                        marginRight: 5
                      }}
                    />
                    Progress
                  </Row>
                </Typography.Text>
              </Col>
              <Col>
                <Row align="middle" justify="space-between">
                  <div
                    style={{
                      height: 7,
                      width: 7,
                      backgroundColor: "#1890ff",
                      marginRight: 5
                    }}
                  />
                  Progress
                </Row>
              </Col>
            </Row>
          </TitLedCard>
        </Col>
      </Row>

      <Row wrap gutter={12} justify="space-around" style={{ width: "100%" }}>
        <Col lg={6} md={6} sm={24} xs={24} style={{ margin: "12px 0px" }}>
          <TitLedCard
            title="Title"
            subtitle="Subtitle"
            value="300"
            icon={<DingdingOutlined className={style.cardIcon} />}
          />
        </Col>

        <Col lg={12} md={9} sm={24} xs={24} style={{ margin: "12px 0px" }}>
          <TitLedCard
            title="Title"
            subtitle="Subtitle"
            value="90%"
            icon={<SkypeOutlined className={style.cardIcon} />}
          />
        </Col>

        <Col lg={6} md={9} sm={24} xs={24} style={{ margin: "12px 0px" }}>
          <TitLedCard
            title="Title"
            subtitle="Subtitle"
            value="45%"
            icon={<FacebookOutlined className={style.cardIcon} />}
          >
            <Row justify="center">
              <Progress
                percent={66}
                strokeColor={{
                  from: "#108ee9",
                  to: "#87d068"
                }}
                status="active"
              />
            </Row>
          </TitLedCard>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default App

