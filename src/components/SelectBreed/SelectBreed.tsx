import React, { useEffect, useState } from 'react';
import { Col, Row, Select, Spin } from 'antd';
import './SelectBreed.scss';
import { useStore } from '../../utils/contextStore';
import { useNavigate, useLocation } from 'react-router-dom';

interface SelectBreedProps {
	setBreed: (breed: string) => void;
}

const SelectBreed: React.FC<SelectBreedProps> = ({ setBreed }) => {
	const { listOfBreeds } = useStore();
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedBreed, setSelectedBreed] = useState<string | undefined>(undefined);

	useEffect(() => {
		// Check if there is a 'breed' query parameter in the URL
		const params = new URLSearchParams(location.search);
		const breedParam = params.get('breed');

		if (breedParam) {
			// Set the breed from the query parameter
			setBreed(breedParam);
			setSelectedBreed(breedParam);
		}
	}, [location.search, setBreed]);

	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
		setBreed(value);

		// Update the URL with the selected breed as a query parameter
		const params = new URLSearchParams(location.search);
		params.set('breed', value);
		navigate(`?${params.toString()}`, { replace: true });

		// Update the selected breed state
		setSelectedBreed(value);
	};

	const onSearch = (value: string) => {
		console.log('search:', value);
	};

	const renderSelectBreeds = () => {
		if (!Array.isArray(listOfBreeds) || !listOfBreeds.length) {
			return <Spin />;
		}

		const dataOptions = listOfBreeds.map((data) => ({
			value: data.id,
			label: data.name
		}));

		return (
			<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
				<Select
					size="large"
					className="selectBreed"
					showSearch
					placeholder="Select breed"
					optionFilterProp="children"
					onChange={onChange}
					onSearch={onSearch}
					filterOption={filterOption}
					options={dataOptions}
					value={selectedBreed}
				/>
			</Col>
		);
	};

	return (
		<Row gutter={[24, 24]} className="selectBreedRow">
			{renderSelectBreeds()}
		</Row>
	);
};

export default SelectBreed;
