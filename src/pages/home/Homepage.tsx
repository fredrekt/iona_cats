import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import DefaultLayout from '../../layouts/DefaultLayout';

const Homepage: React.FC = () => {
	return (
		<DefaultLayout>
			<PageTitle title="Home" />
			<Button type="primary">Hello World</Button>
			<Link to="/animal">Go to Animal</Link>
		</DefaultLayout>
	);
};

export default Homepage;
