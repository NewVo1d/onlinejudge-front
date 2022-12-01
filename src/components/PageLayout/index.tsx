import { Layout } from '@douyinfe/semi-ui';
import { Outlet } from 'oh-router-react';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';

export function PageLayout() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header>
        <PageHeader />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
}
