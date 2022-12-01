import { Col, Row } from '@douyinfe/semi-ui';
import PageContent from '../../../components/PageLayout/components/PageContent';
import AnnouncementList from './AnnouncementList';

function Home() {
  return (
    <PageContent>
      <Row>
        <Col span={20} offset={2}>
          <AnnouncementList />
        </Col>
      </Row>
    </PageContent>
  );
}

export default Home;
