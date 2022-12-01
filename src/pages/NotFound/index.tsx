import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';
import Description from './description';
import PageContent from '../../components/PageLayout/components/PageContent';

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
