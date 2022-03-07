import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="small" style={{width:"60px"}}/>
        <Typography.Title level={2} className="logo"><Link to="/"></Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
       
      

      <Menu > 
        <div className='flex mt-10 '>
          <div className="flex flex-col"> 
         <Menu.Item icon={<HomeOutlined/>}> 
          <Link to="/" className="pr-10">Home</Link>
        </Menu.Item></div>
       
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies"  className="pr-10">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges"  className="pr-10">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news"  className="pr-10">News</Link>
        </Menu.Item>
        </div>
      </Menu>
      
      )}
    </div>
  );
};

export default Navbar;