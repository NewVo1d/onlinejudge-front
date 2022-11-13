import React from 'react';
import { Typography } from '@douyinfe/semi-ui';
import './styles/index.css';

function index() {
  const { Title } = Typography;
  return (
    <div className="footer-container">
      <Title heading={6}>Online Judege</Title>
    </div>
  );
}

export default index;
