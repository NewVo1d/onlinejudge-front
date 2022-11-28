import React from 'react';
import { Card, Space, Divider, Button, Notification } from '@douyinfe/semi-ui';
import { IconSync } from '@douyinfe/semi-icons';
import TagButton from './../../components/TagButton/index';
import './styles/tagList.css';
import { useMemoizedFn } from 'ahooks';
import CardTitle from './../../components/CardTitle/index';

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
  const handlerButtonClick = useMemoizedFn(() => {
    Notification.open({
      title: 'Hi, Bytedance',
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
        onClick={handlerButtonClick}>
        Pick One
      </Button>
    </Card>
  );
};

export default TagList;
