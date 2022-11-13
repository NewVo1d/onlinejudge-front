import { Button, Avatar, Dropdown } from '@douyinfe/semi-ui';

function Footer() {
  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  return (
    <Dropdown
      position="bottomRight"
      render={
        <Dropdown.Menu>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Management</Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <Button onClick={switchMode}>Change</Button>
      <Avatar
        size="small"
        color="light-blue"
      >
        ND
      </Avatar>
    </Dropdown>
  );
}

export default Footer;
