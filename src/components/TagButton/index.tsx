import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import { useNavigate } from 'oh-router-react';

const TagButton = ({ tag }: any) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/problem?tag=${tag}`);
  };

  return (
    <Button size="small" theme="light" type="tertiary" onClick={handlerClick}>
      {tag}
    </Button>
  );
};

export default TagButton;
