import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { useNavigate, useLocation } from 'oh-router-react';
import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from '@douyinfe/semi-illustrations';
import PageContent from '../../components/PageContent';
import Description from './components/description';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  setTimeout(() => (window.location.href = '/'), 3000);
  return (
    <PageContent>
      <Empty
        image={<IllustrationNotFound />}
        darkModeImage={<IllustrationNotFoundDark />}
        description={<Description />}
      />
    </PageContent>
  );
};

export default NotFound;
