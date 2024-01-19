import { Typography } from 'antd';
import React from 'react';
import './Footerbar.scss';

const Footerbar: React.FC = () => {
	return (
		<Typography.Paragraph className="footerTxt">
			Created with ❤️ by{' '}
			<a rel="noreferrer" href="https://fredgaringo-main.netlify.app/" target="_blank">
				Fred Garingo
			</a>
		</Typography.Paragraph>
	);
};

export default Footerbar;
