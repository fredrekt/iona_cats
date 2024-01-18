import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

const Animalpage: React.FC = () => {
	return (
		<DefaultLayout>
			<PageTitle title="Animal" />
			<Link to="/">Go back</Link>
		</DefaultLayout>
	);
};

export default Animalpage;
