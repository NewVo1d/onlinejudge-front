import React from 'react';
import { Space, Image, Typography } from '@douyinfe/semi-ui';

function Title() {
  const { Title } = Typography;
  return (
    <Space>
      <Image src="logo.svg"></Image>
      <Title heading={4}>Online Judge</Title>
    </Space>
  );
}

export default Title;
