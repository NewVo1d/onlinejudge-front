import React from 'react';
import { Card, Typography, Space, Divider, Button, Notification } from '@douyinfe/semi-ui';
import { IconSync } from '@douyinfe/semi-icons';
import TagButton from './../../components/TagButton/index';
import './styles/tagList.css';
import { useMemoizedFn } from 'ahooks';

const TABLETITLE = 'Tags';

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

const TableTitle = () => {
  const { Title } = Typography;
  return <Title heading={5}>{TABLETITLE}</Title>;
};

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
    <Card title={<TableTitle />}>
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
