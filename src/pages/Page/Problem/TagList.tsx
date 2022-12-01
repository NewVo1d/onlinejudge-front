import React from 'react';
import { Card, Space, Divider, Button, Notification } from '@douyinfe/semi-ui';
import { IconSync } from '@douyinfe/semi-icons';
import './styles/tagList.css';
import { useMemoizedFn } from 'ahooks';
import CardTitle from '../../../components/CardTitle';
import TagButton from '../../../components/TagButton';

const CARDTITLE = 'Tags';

const tags = [
  'DP',
  'Hash',
  'Sort',
  'LinkList',
  'Stack',
  'Greedy',
  'Shell',
  'Tree',
  'Trie',
  'Graph',
  'DP',
  'Hash',
  'Sort',
  'LinkList',
  'Stack',
  'Greedy',
  'Shell',
  'Tree',
  'Trie',
  'Graph'
];

const TagList = () => {
  const handlerPickClick = useMemoizedFn(() => {
    Notification.open({
      title: 'You click the button',
      content: 'ies dance dance dance',
      duration: 3,
      position: 'top'
    });
  });

  return (
    <Card title={<CardTitle>{CARDTITLE}</CardTitle>}>
      <Space wrap>
        {tags.map((tag) => (
          <TagButton key={tag} tag={tag} />
        ))}
      </Space>
      <Divider className="tagList-divider" />
      <Button
        block
        theme={'solid'}
        type={'secondary'}
        icon={<IconSync />}
        onClick={handlerPickClick}>
        Pick One
      </Button>
    </Card>
  );
};

export default TagList;
