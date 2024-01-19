import { Menu } from 'antd';
import React from 'react';

const Navbar: React.FC = () => {
	const items = [
		{
			key: 1,
			label: 'Home'
		}
	];

	return (
		<div className="navbar">
			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={items}
				style={{ flex: 1, minWidth: 0 }}
			/>
		</div>
	);
};

export default Navbar;
