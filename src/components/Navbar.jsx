import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar
                    src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
                    size="large"
                />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptHacker</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
                    <Link to="/exchange">Exchange</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;
