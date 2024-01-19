import axios from 'axios';
import { Api } from '../types/api.types';

/**
 * Get All Cat Breeds
 * This request gets a list of cat breeds.
 * @link https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=gpN-ReBkp
 **/
export const getBreeds = async (): Promise<Api.Animals.Res.GetBreed[]> => {
	try {
		return (await axios.get('/breeds')).data;
	} catch (error) {
		console.error(`Something went wrong with the request to get the list of breeds:`, error);
		throw error;
	}
};

/**
 * Get Cats by breed
 * This request gets a list of cats by breed id.
 * @link https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=gpN-ReBkp
 **/
export const getCatsByBreed = async (
	breed: string,
	limit: number,
	page: number
): Promise<Api.Animals.Res.GetAnimal[]> => {
	try {
		return (await axios.get(`/images/search?breed_ids=${breed}&limit=${limit}&page=${page}`)).data;
	} catch (error) {
		console.error(`Something went wrong with the request to get the list of cats by breed:`, error);
		throw error;
	}
};

/**
 * Get One Cats by id
 * This request gets the detailed information of the selected cat
 * @link https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
 **/
export const getCat = async (id: string): Promise<Api.Animals.Res.GetAnimal | undefined> => {
	try {
		return (await axios.get(`/images/${id}`)).data;
	} catch (error) {
		console.error(`Something went wrong with the request to get the detailed info of the cat:`, error);
		throw error;
	}
};
