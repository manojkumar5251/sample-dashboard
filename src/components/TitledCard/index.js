import { Card, Typography } from "antd"
import React from "react"

export const TitLedCard = ({
  title,
  subtitle,
  value,
  icon,
  children,
  size = "small"
}) => {
  const titleContent = (
    <React.Fragment>
      <Typography.Title style={{ margin: 0 }} level={5}>
        {title}
      </Typography.Title>
      <Typography.Title style={{ margin: 0 }} level={5}>
        {subtitle}
      </Typography.Title>
      <Typography.Title style={{ margin: 0 }} level={5}>
        {value}
      </Typography.Title>
    </React.Fragment>
  )

  return (
    <Card
      style={{ height: "100%" }}
      size={size}
      title={title && subtitle && value && titleContent}
      extra={icon}
    >
      {children}
    </Card>
  )
}

