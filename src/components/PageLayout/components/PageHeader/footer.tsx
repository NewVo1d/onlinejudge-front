import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { Button, Avatar, Dropdown, Space } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { userStore } from '../../../../common/userStore';
import './styles/index.css';

function Footer() {
  const [icon, setIcon] = useState(<IconSun className="footer-icon-color" />);
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      setIcon(<IconSun className="footer-icon-color" />);
      body.removeAttribute('theme-mode');
    } else {
      setIcon(<IconMoon className="footer-icon-color" />);
      body.setAttribute('theme-mode', 'dark');
    }
  };

  const handlerLogOutClick = () => {
    userStore.logout();
  };

  return (
    <Space>
      <Button theme="borderless" icon={icon} onClick={switchMode}></Button>
      <Dropdown
        position="bottomRight"
        render={
          <Dropdown.Menu>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Management</Dropdown.Item>
            <Dropdown.Item onClick={handlerLogOutClick}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        }>
        <Avatar size="small" color="light-blue">
          ND
        </Avatar>
      </Dropdown>
    </Space>
  );
}

export default Footer;
