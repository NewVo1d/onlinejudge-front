import { Card, Col, Row } from '@douyinfe/semi-ui';
import PageContent from '../../components/PageContent';

function Home() {
  return (
    <PageContent>
      <Row>
        <Col span={20} offset={2}>
          <Card title="Announcements">1</Card>
        </Col>
      </Row>
    </PageContent>
  );
}

export default Home;
