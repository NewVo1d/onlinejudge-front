import React from 'react';
import { Typography } from '@douyinfe/semi-ui';
const CardTitle = (props: any) => {
  const { children } = props;
  const { Title } = Typography;
  return <Title heading={5}>{children}</Title>;
};

export default CardTitle;
