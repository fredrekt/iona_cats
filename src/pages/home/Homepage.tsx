import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DefaultLayout from '../../layouts/DefaultLayout';
import SelectBreed from '../../components/SelectBreed/SelectBreed';
import CatList from '../../components/CatList/CatList';

const Homepage: React.FC = () => {
	const [selectedBreed, setSelectedBreed] = useState<string>('');

	return (
		<DefaultLayout>
			<PageTitle title="Home" />
			<SelectBreed setBreed={(breed) => setSelectedBreed(breed)} />
			<CatList breed={selectedBreed} />
		</DefaultLayout>
	);
};

export default Homepage;
