import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import { useNavigate } from 'oh-router-react';
import './styles/index.css';

const getTitle = (level: string): string => {
  const title = level.charAt(0).toUpperCase() + level.slice(1);
  return title;
};

const getType = (level: string): any => {
  let type = '';
  switch (level) {
    case 'low':
      type = 'primary';
      break;
    case 'mid':
      type = 'warning';
      break;
    case 'high':
      type = 'danger';
      break;
    default:
      type = 'primary';
      break;
  }
  return type;
};

const LevelButton = ({ level }: any) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/problem?level=${level}`);
  };

  return (
    <Button
      className="button"
      size="small"
      theme="solid"
      type={getType(level)}
      onClick={handlerClick}>
      {getTitle(level)}
    </Button>
  );
};

export default LevelButton;
