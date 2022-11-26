import React, { useState } from 'react';
import { Typography, Space } from '@douyinfe/semi-ui';

const count = (time: number, setTime: any) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => setTime(time - 1), 1000);
  }
};

const Description = () => {
  const [time, setTime] = useState(3);
  count(time, setTime);
  return (
    <Space vertical={true} spacing={'medium'}>
      <Typography.Title heading={3}>页面404</Typography.Title>
      <Typography.Text link={{ href: '/' }}>{time}s后返回首页</Typography.Text>
    </Space>
  );
};

export default Description;
