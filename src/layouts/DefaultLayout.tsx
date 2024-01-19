import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import Navbar from '../components/Navbar/Navbar';
import './DefaultLayout.scss';
import Footerbar from '../components/Footerbar/Footerbar';

interface DefaultLayoutProps {
	className?: string;
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, className }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Layout className={`mainLayout ${className}`}>
			<Header className="mainHeader">
				<Navbar />
			</Header>
			<Content className="mainContent">{children}</Content>
			<Footer className="mainFooter">
				<Footerbar />
			</Footer>
		</Layout>
	);
};

export default DefaultLayout;
