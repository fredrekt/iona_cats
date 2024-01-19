import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Animalpage from './pages/animal/Animalpage';
import './api/config';
import { StoreProvider } from './utils/contextStore';

const App: React.FC = () => {
	return (
		<StoreProvider>
			<Router>
				<Routes>
					<Route path="/" index element={<Homepage />} />
					<Route path="/animal/:id" element={<Animalpage />} />
				</Routes>
			</Router>
		</StoreProvider>
	);
};

export default App;
