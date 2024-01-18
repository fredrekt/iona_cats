import React from 'react';
import './PageTitle.scss';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet';

interface PageTitleProps {
	title: string;
	className?: string;
	level?: (typeof TITLE_ELE_LIST)[number];
}

declare const TITLE_ELE_LIST: readonly [1, 2, 3, 4, 5];

const PageTitle: React.FC<PageTitleProps> = ({ title, className, level }) => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					{title ? `${title} | ` : ''}
					{process.env.REACT_APP_APP_NAME}
				</title>
			</Helmet>
			<Typography.Title className={`pageTitle ${className}`} level={level}>
				{title}
			</Typography.Title>
		</>
	);
};

export default PageTitle;
