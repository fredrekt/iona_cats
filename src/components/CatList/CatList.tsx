import React, { useEffect, useState } from 'react';
import { Animal } from '../../types/animal.types';
import { Button, Col, Empty, Row, Spin, message } from 'antd';
import { getCatsByBreed } from '../../api/api';
import './CatList.scss';
import CatCard from '../CatCard/CatCard';

interface CatListProps {
	breed: string;
}

const CatList: React.FC<CatListProps> = ({ breed }) => {
	const [listOfCats, setListOfCats] = useState<Animal[]>([]);
	const [page, setPage] = useState<number>(1);
	const [moreItems, setMoreItems] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);

	const renderCatList = () => {
		if (!breed) {
			return <Empty />;
		}
		if (!Array.isArray(listOfCats) || !listOfCats.length) {
			return <Spin />;
		}

		return listOfCats.map((data) => (
			<Col key={data.id} className="catCardCol" xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
				<CatCard cat={data} />
			</Col>
		));
	};

	const renderCatListCta = () => {
		if (!breed || !moreItems) {
			return;
		}

		if (!Array.isArray(listOfCats) || !listOfCats.length) {
			return;
		}

		return (
			<Button
				size={'large'}
				loading={loading}
				disabled={loading}
				onClick={() => setPage(page + 1)}
				type="primary"
			>
				Load more
			</Button>
		);
	};

	const loadListOfCats = async () => {
		if (!breed) return;
		try {
			setLoading(true);
			const res = await getCatsByBreed(breed, 10, page);

			// Check for repeated items based on id because I can't get the total count of the cats in the db and there's no documentation in the API as well.
			const uniqueCats = res.filter((newCat) => !listOfCats.some((cat) => cat.id === newCat.id));
			if (uniqueCats.length === 0) {
				setMoreItems(false);
				return;
			}

			setListOfCats((prevList) => [...prevList, ...uniqueCats]);
		} catch (error) {
			message.error(`Apologies but we could not load new cats for you at this time! Miau!`);
			console.error(`Something went wrong in getting list of cats by breed.`);
		} finally {
			setLoading(false);
		}
	};

	// Reset the state when the breed changes
	useEffect(() => {
		setListOfCats([]);
		setPage(1);
		setMoreItems(true);
	}, [breed]);

	useEffect(() => {
		loadListOfCats();
		// eslint-disable-next-line
	}, [breed, page]);

	return (
		<>
			<Row justify={'center'} gutter={[24, 24]} className="catListRow">
				{renderCatList()}
			</Row>
			<Row justify={'center'} gutter={[24, 24]} className="catListRowCta">
				{renderCatListCta()}
			</Row>
		</>
	);
};

export default CatList;
