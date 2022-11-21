import { Card, Col, Row } from '@douyinfe/semi-ui';
import PageContent from '../../components/PageContent';

function Rank() {
  return (
    <PageContent>
      <Row>
        <Col span={20} offset={2}>
          <Card title="Rank">1</Card>
        </Col>
      </Row>
    </PageContent>
  );
}

export default Rank;
