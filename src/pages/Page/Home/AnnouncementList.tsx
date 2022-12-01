import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Notification } from '@douyinfe/semi-ui';
import { IconRefresh } from '@douyinfe/semi-icons';
import CardTitle from '../../../components/CardTitle';
import { useMemoizedFn } from 'ahooks';

const PAGESIZE = 10;
const CARDTITLE = 'Announcements';
const EMPTYCONTENT = 'No Announcement Yet';

const getData = () => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      title: `Announcement ${i}`,
      owner: 'root',
      updatetime: new Date().toLocaleString()
    });
  }
  return data;
};

const data = getData();

const AnnouncementList = () => {
  const { Column } = Table;
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

  const handlerRefreshClick = useMemoizedFn(() => {
    Notification.open({
      duration: 3,
      position: 'top',
      content: 'semi-ui-notification',
      title: 'Hi bytedance'
    });
  });

  return (
    <Card
      title={<CardTitle>{CARDTITLE}</CardTitle>}
      headerExtraContent={
        <Button
          theme={'solid'}
          type={'secondary'}
          icon={<IconRefresh />}
          onClick={handlerRefreshClick}>
          Refresh
        </Button>
      }>
      <Table
        dataSource={dataSource}
        pagination={{
          currentPage,
          pageSize: PAGESIZE,
          total: data.length,
          onPageChange: handlePageChange
        }}
        loading={loading}
        showHeader={false}
        empty={EMPTYCONTENT}>
        <Column key="title" dataIndex="title" width={200}></Column>
        <Column key="owner" dataIndex="owner" width={1}></Column>
        <Column key="updatetime" dataIndex="updatetime" width={1}></Column>
      </Table>
    </Card>
  );
};

export default AnnouncementList;
