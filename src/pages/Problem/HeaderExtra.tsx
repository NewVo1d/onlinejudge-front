import React, { useState } from 'react';
import { Button, Input, Space, Switch } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useMemoizedFn } from 'ahooks';
import './styles/headerExtra.css';
import { useNavigate } from 'oh-router-react';

const HeaderExtra = ({ isTag, setIsTag }: any) => {
  const navigate = useNavigate();
  const [key, setKey] = useState('');

  const handlerSwitchChange = useMemoizedFn(() => {
    setIsTag(!isTag);
  });

  const handlerInputChange = useMemoizedFn((value) => {
    setKey(value);
  });

  const handlerInputClick = useMemoizedFn(() => {
    navigate(`/problem?key=${key}`);
  });

  const handlerButtonClick = useMemoizedFn(() => {
    navigate(`/problem`);
  });

  return (
    <Space>
      <Switch checkedText="Tag" uncheckedText="Tag" size={'large'} onChange={handlerSwitchChange} />
      <Input
        className="headerExtra-input"
        value={key}
        onChange={(value) => {
          handlerInputChange(value);
        }}
        suffix={<IconSearch onClick={handlerInputClick} />}
      />
      <Button
        theme={'solid'}
        type={'secondary'}
        icon={<IconRefresh />}
        onClick={handlerButtonClick}>
        Reset
      </Button>
    </Space>
  );
};

export default HeaderExtra;
