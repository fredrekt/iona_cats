import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Animalpage from './pages/animal/Animalpage';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" index element={<Homepage />} />
				<Route path="/animal" element={<Animalpage />} />
			</Routes>
		</Router>
	);
};

export default App;
