import { Avatar, Button, Drawer, Flex, Menu } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Login from "../components/auth/Login";

const menuItems = [
  { label: "Food", key: "food" },
  { label: "Clothing", key: "clothing" },
];

function Layout() {
  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin]=useState(false);
  const handleLoginDrawer=()=>{
    setOpenLogin(!openLogin);

  }
  const onCloseLogin=()=>{
     setOpenLogin(false);
  }


  const handleDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Flex style={{ height: 70 }} justify="space-between" align="center">
          <Button type="primary" onClick={handleDrawer}>
            {open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Flex align="center" gap="middle">
            <Button shape="circle" icon={<HeartOutlined />} />
            <Button shape="circle" icon={<ShoppingCartOutlined />} />
            <Avatar onClick={handleLoginDrawer} icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Container>
      <Drawer
        title="Login"
        placement='right'
        closable={true}
        onClose={onCloseLogin}
        open={openLogin}
      >
       <Login/>
      </Drawer>
      <Drawer
        title="Categories"
        placement='left'
        closable={true}
        onClose={onClose}
        open={open}
      >
       
      </Drawer>
      <Outlet />
    </div>
  );
}

export default Layout;
