import PageContent from '../../components/PageContent';
import React from 'react';
import { Card, Col, Icon, Row, Tag, Table, Space, Dropdown, Switch, Input, Button } from '@douyinfe/semi-ui';
import { IconSmallTriangleDown, IconRefresh } from '@douyinfe/semi-icons';
function CrateTable() {
    const columns = [
        {
            title: 'When',
            dataIndex: 'when',
        },
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Problem',
            dataIndex: 'problem',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
        {
            title: 'Memory',
            dataIndex: 'memory',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
        {
            title: 'Author',
            dataIndex: 'author',
        },
    ];
    const data = [
        {
            key: '1',
            when: '2022-11-19 09:14:09',
            id: 'e44cf1faf22f',
            status: Tag1("Accept"),
            problem: '1',
            time: '1ms',
            memory: '2M',
            language: 'Java',
            author: 'Zhong'
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
}
function Tag1(_s: string) {
  if (_s=="Accept") {
    return(
      <Space>
        <Tag color="green" type="solid">
         {_s}
        </Tag>
      </Space>
    )
  }
  else if(_s=="Runtime Error") {
    return(
      <Space>
        <Tag color="red" type="solid">
         {_s}
        </Tag>
      </Space>
    )
  }
  else if(_s=="Compile Error") {
    return(
      <Space>
        <Tag color="orange" type="solid">
         {_s}
        </Tag>
      </Space>
    )
  }
  else if(_s=="Memory Limit Exceeded") {
    return(
      <Space>
        <Tag color="red" type="solid">
         {_s}
        </Tag>
      </Space>
    )
  }
  else
    return(
      <Space>
        <Tag color="red" type="solid">
        {_s}
        </Tag>
      </Space>
    )
}
function Dropdown1() {
  return (
      <Dropdown 
          clickToHide
          render={
              <Dropdown.Menu>
                  <Dropdown.Item>Accept</Dropdown.Item>
                  <Dropdown.Item>Runtime Error</Dropdown.Item>
                  <Dropdown.Item>Compile Error</Dropdown.Item>
                  <Dropdown.Item>Memory Limit Exceeded</Dropdown.Item>
              </Dropdown.Menu>
          }
      >
          Status <IconSmallTriangleDown />
      </Dropdown>
  );
}
function Switch1() {
  return (
    <Switch defaultChecked={false} uncheckedText="All" checkedText="Mine" size='large' ></Switch>
  )
}
function SearchAuthor() {
  return(
    <Input style={{width: 200}} showClear defaultValue='search author'></Input>
  )
}
function Button1() {
  return(
    <Button theme='solid' type='secondary' size='large' ><IconRefresh style={{marginRight:10}}/>Refresh</Button>
  )
}
function Status() {
  return (
    <PageContent>
      <Row>
        <Col
          span={24}
          // offset={1}
        >
          <Card 
            title="Status" 
            headerExtraContent={
              <Space spacing='loose' style={{ marginTop: '3px' }}><Dropdown1 /><Switch1 /><SearchAuthor /><Button1 /></Space>
            }>
            <CrateTable />
          </Card>
        </Col>
      </Row>
    </PageContent>
  );
}
// ReactDOM.render(
//   <Status />,
//   document.getElementById('root')
// );
// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(<Status />);
export default Status;