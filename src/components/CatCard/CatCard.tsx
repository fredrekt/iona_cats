import React from 'react';
import './CatCard.scss';
import { Animal } from '../../types/animal.types';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

interface CatCardProps {
	cat: Animal;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
	return (
		<Card
			className="catCard"
			actions={[
				<Link to={`/animal/${cat.id}`}>
					<Button size="large" type="primary">
						View details
					</Button>
				</Link>
			]}
			hoverable
			key={cat.id}
			cover={<img className="catCardPreview" alt="cat" src={cat.url} />}
		/>
	);
};

export default CatCard;
