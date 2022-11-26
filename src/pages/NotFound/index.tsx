import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';
import PageContent from '../../components/PageContent';
import Description from './description';

const NotFound = () => {
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
