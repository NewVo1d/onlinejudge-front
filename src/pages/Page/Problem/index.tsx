import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import ProblemList from './ProblemList';
import TagList from './TagList';
import PageContent from '../../../components/PageLayout/components/PageContent';

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
