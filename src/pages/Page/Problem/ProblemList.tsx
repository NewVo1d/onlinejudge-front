import React, { useEffect, useState } from 'react';
import { Card, Table } from '@douyinfe/semi-ui';
import HeaderExtra from './HeaderExtra';
import { useMemoizedFn } from 'ahooks';
import CardTitle from '../../../components/CardTitle';
import LevelButton from '../../../components/LevelButton';
import TagButton from '../../../components/TagButton';

const PAGESIZE = 10;
const CARDTITLE = 'Problems';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    width: 500
  },
  {
    title: 'Level',
    dataIndex: 'level',
    render: (text: string) => {
      return <LevelButton level={text} />;
    }
  },
  {
    title: 'Total',
    dataIndex: 'total'
  },
  {
    title: 'AC Rate',
    dataIndex: 'acrate'
  }
];

const columns_tag = [
  {
    title: 'Id',
    dataIndex: 'id'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    width: 500
  },
  {
    title: 'Level',
    dataIndex: 'level',
    render: (text: string) => {
      return <LevelButton level={text} />;
    }
  },
  {
    title: 'Total',
    dataIndex: 'total'
  },
  {
    title: 'AC Rate',
    dataIndex: 'acrate'
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    render: (text: string) => {
      return <TagButton title={text} />;
    }
  }
];

const getData = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    const level = i % 2 === 0;
    const randomNumber = (i * 1000) % 100;
    data.push({
      id: `${i}`,
      title: `problem ${i}`,
      level: level ? `low` : `high`,
      total: randomNumber,
      acrate: randomNumber,
      tag: 'DP'
    });
  }
  return data;
};

const data = getData();

const ProblemList = () => {
  const [isTag, setIsTag] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (currentPage = 1) => {
    setLoading(true);
    setCurrentPage(currentPage);
    return new Promise((res) => {
      setTimeout(() => {
        const data = getData();
        const dataSource = data.slice((currentPage - 1) * PAGESIZE, currentPage * PAGESIZE);
        res(dataSource);
      }, 300);
    }).then((dataSource: any) => {
      setLoading(false);
      setDataSource(dataSource);
    });
  };

  const handlePageChange = useMemoizedFn((page: number) => {
    fetchData(page);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      title={<CardTitle>{CARDTITLE}</CardTitle>}
      headerExtraContent={<HeaderExtra isTag={isTag} setIsTag={setIsTag} />}>
      <Table
        columns={isTag ? columns : columns_tag}
        dataSource={dataSource}
        pagination={{
          currentPage,
          pageSize: PAGESIZE,
          total: data.length,
          onPageChange: handlePageChange
        }}
        loading={loading}
      />
    </Card>
  );
};

export default ProblemList;
