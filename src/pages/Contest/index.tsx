import { Col, Row } from '@douyinfe/semi-ui';
import PageContent from '../../components/PageContent';
import ContestList from './ContestList';

function Contest() {
  return (
    <PageContent>
      <Row>
        <Col span={20} offset={2}>
          <ContestList />
        </Col>
      </Row>
    </PageContent>
  );
}

export default Contest;
