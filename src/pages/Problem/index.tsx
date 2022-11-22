import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import PageContent from '../../components/PageContent';
import ProblemList from './ProblemList';
import TagList from './TagList';

function Problem() {
  return (
    <PageContent>
      <Row type="flex" justify="space-around">
        <Col span={18}>
          <ProblemList />
        </Col>
        <Col span={5}>
          <TagList />
        </Col>
      </Row>
    </PageContent>
  );
}

export default Problem;
