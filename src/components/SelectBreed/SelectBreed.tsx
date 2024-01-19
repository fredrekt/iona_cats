import React, { useEffect, useState } from 'react';
import { Select, Spin } from 'antd';
import { Breed } from '../../types/animal.types';
import { getBreeds } from '../../api/api';
import './SelectBreed.scss';
import { useStore } from '../../utils/contextStore';

interface SelectBreedProps {
	setBreed: (breed: string) => void;
}

const SelectBreed: React.FC<SelectBreedProps> = ({ setBreed }) => {
	const { listOfBreeds } = useStore();

	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
		setBreed(value);
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
			/>
		);
	};

	return <>{renderSelectBreeds()}</>;
};

export default SelectBreed;
