import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import { getCat } from '../../api/api';
import { Api } from '../../types/api.types';
import { Breadcrumb, Col, Descriptions, Image, Row, Typography, message } from 'antd';
import './Animalpage.scss';

const Animalpage: React.FC = () => {
	const { id } = useParams();
	const [selectedCat, setSelectedCat] = useState<Api.Animals.Res.GetAnimal | undefined>(undefined);
	const navigate = useNavigate();

	const loadCatDetails = async () => {
		if (!id) return;
		try {
			const res = await getCat(id);
			setSelectedCat(res);
		} catch (error) {
			message.error(`Apologies but we could not load the cat for you at this time! Miau!`);
			console.error(`Something wen't wrong in getting details of the cat.`);
		}
	};

	useEffect(() => {
		loadCatDetails();
		// eslint-disable-next-line
	}, [id]);

	// const booleanParserDetail = (x: boolean): string => (x ? 'Yes' : 'No');
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<DefaultLayout className="animalPage">
			{selectedCat && (
				<Row justify={'center'} align={'middle'} gutter={[24, 24]}>
					<Col xs={24} sm={24} md={12} lg={15} xl={14} xxl={14}>
						<Breadcrumb className="animalPageBreadcrumb">
							<Breadcrumb.Item className="clickable" onClick={handleGoBack}>
								Home
							</Breadcrumb.Item>
							<Breadcrumb.Item>Animal</Breadcrumb.Item>
						</Breadcrumb>
						<Image className="animalPageImage" src={selectedCat.url} />
					</Col>
					<Col xs={24} sm={24} md={12} lg={9} xl={10} xxl={10}>
						{selectedCat.breeds &&
							selectedCat.breeds.length &&
							Array.isArray(selectedCat.breeds) &&
							selectedCat.breeds.map((data) => (
								<>
									<PageTitle title={data.name} />
									<Typography.Paragraph>{data.description}</Typography.Paragraph>
									<Typography.Paragraph>{data.temperament}</Typography.Paragraph>
									<Descriptions title="Details">
										<Descriptions.Item label="Origin">{data.origin}</Descriptions.Item>
										{/* <Descriptions.Item label="Life Span">{data.life_span}</Descriptions.Item>
										<Descriptions.Item label="Weight - Imperial">
											{data.weight?.imperial}
										</Descriptions.Item>
										<Descriptions.Item label="Weight - Metric">
											{data.weight?.metric}
										</Descriptions.Item>
										<Descriptions.Item label="Hypoallergenic">
											{booleanParserDetail(data.hypoallergenic)}
										</Descriptions.Item>
										<Descriptions.Item label="Short Legs">
											{booleanParserDetail(data.short_legs)}
										</Descriptions.Item>
										<Descriptions.Item label="Suppressed Tail">
											{booleanParserDetail(data.suppressed_tail)}
										</Descriptions.Item>
										<Descriptions.Item label="Rare">
											{booleanParserDetail(data.rare)}
										</Descriptions.Item>
										<Descriptions.Item label="Natural">
											{booleanParserDetail(data.natural)}
										</Descriptions.Item>
										<Descriptions.Item label="Hairless">
											{booleanParserDetail(data.hairless)}
										</Descriptions.Item>
										<Descriptions.Item label="Experimental">
											{booleanParserDetail(data.experimental)}
										</Descriptions.Item> */}
									</Descriptions>
								</>
							))}
					</Col>
				</Row>
			)}
		</DefaultLayout>
	);
};

export default Animalpage;
