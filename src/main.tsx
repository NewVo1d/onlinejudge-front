import { Layout } from '@douyinfe/semi-ui';
import { Outlet, RouterView } from 'oh-router-react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { router } from './router';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterView router={router} />
);
