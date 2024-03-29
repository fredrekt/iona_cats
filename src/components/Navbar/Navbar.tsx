import { Menu, Typography } from 'antd';
import React from 'react';
import './Navbar.scss';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const items = [
		{
			key: 'home',
			label: 'Home',
			path: '/'
		}
		// Add more menu items as needed
	];

	// Extract the pathname from the location object
	const pathname = location.pathname;

	const handleClick = (path: string) => {
		navigate(path);
	};

	return (
		<div className="navbar">
			<Link className="navbarLinkLogo" to="/">
				<Typography.Text className="navbarLogo">{process.env.REACT_APP_APP_NAME || 'Cats.'}</Typography.Text>
			</Link>
			<Menu
				selectedKeys={[pathname]}
				theme="light"
				mode="horizontal"
				style={{ flex: 1, minWidth: 0, background: '#fff', fontSize: 15 }}
			>
				{items.map((item) => (
					<Menu.Item key={item.path} onClick={() => handleClick(item.path)}>
						{item.label}
					</Menu.Item>
				))}
			</Menu>
		</div>
	);
};

export default Navbar;
