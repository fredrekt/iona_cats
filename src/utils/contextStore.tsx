import React, { createContext, useContext, useEffect, useState } from 'react';
import { Breed } from '../types/animal.types';
import { getBreeds } from '../api/api';
import { message } from 'antd';

interface Store {
	listOfBreeds: Breed[];
}

interface StoreProviderProps {
	children: React.ReactNode;
}

const initialStore: Store = {
	listOfBreeds: []
};

const StoreContext = createContext(initialStore);

export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [listOfBreeds, setListOfBreeds] = useState<Breed[]>([]);

	const loadListOfBreeds = async () => {
		try {
			const res = await getBreeds();
			setListOfBreeds(res);
		} catch (error) {
			message.error(`Apologies but we could not load new cat breeds for you at this time! Miau!`);
			console.error(`Something wen't wrong in getting list of breeds`);
		}
	};

	const store: Store = {
		listOfBreeds
	};

	useEffect(() => {
		loadListOfBreeds();
	}, []);

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
