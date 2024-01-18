import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
	return (
		<div>
			<Button type="primary">Hello World</Button>
			<Link to="/animal">Go to Animal</Link>
		</div>
	);
};

export default Homepage;
