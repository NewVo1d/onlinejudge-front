import { Nav } from '@douyinfe/semi-ui';
import { useNavigate, useLocation } from 'oh-router-react';
import {
  IconHomeStroked,
  IconChecklistStroked,
  IconPrizeStroked,
  IconLightningStroked,
  IconIssueStroked,
  IconCandlestickChartStroked
} from '@douyinfe/semi-icons';
import Footer from './footer';

function PageHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const navHeader = {
    logo: <img src="/logo.svg" />,
    text: 'Online Judge'
  };

  const navItems = [
    {
      itemKey: 'home',
      text: 'Home',
      icon: <IconHomeStroked />,
      onClick: () => navigate('/home')
    },
    {
      itemKey: 'problem',
      text: 'Problem',
      icon: <IconChecklistStroked />,
      onClick: () => navigate('/problem')
    },
    {
      itemKey: 'contest',
      text: 'Contest',
      icon: <IconPrizeStroked />,
      onClick: () => navigate('/contest')
    },
    {
      itemKey: 'status',
      text: 'Status',
      icon: <IconLightningStroked />,
      onClick: () => navigate('/status')
    },
    {
      itemKey: 'rank',
      text: 'Rank',
      icon: <IconCandlestickChartStroked />,
      onClick: () => navigate('/rank')
    },
    {
      itemKey: 'about',
      text: 'About',
      icon: <IconIssueStroked />,
      onClick: () => navigate('/about')
    }
  ];

  return (
    <div>
      <Nav
        defaultSelectedKeys={['home']}
        selectedKeys={[location.pathname.slice(1)]}
        mode={'horizontal'}
        header={navHeader}
        items={navItems}
        footer={<Footer />}
      ></Nav>
    </div>
  );
}

export default PageHeader;
