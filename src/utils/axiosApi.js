import axios from "axios"
import { API_ENDPOINTS } from "./constants"

export const getAllCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.CHARACTERS}?page=${page}`);   // with page
        return response.data;
    } catch(error) {
        console.error('Axios error: ', error);
        throw error;
    }
};

export const getAllCharactersCount = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.CHARACTERS}`); 
        return response.data;
    } catch(error) {
        console.error('Axios error: ', error);
        throw error;
    }
};

export const getCharacterById = async (id) => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.CHARACTERS}/${id}`);
        return response.data;
    } catch(error) {
        console.error('Axios error: ', error);
        throw error;
    }
};

export const getAllLocations = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.LOCATIONS}`);
        return response.data;
    } catch(error) {
        console.error('Axios error: ', error);
        throw error;
    }
};

export const getAllEpisodes = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINTS.EPISODES}`);
        return response.data;
    } catch(error) {
        console.error('Axios error: ', error);
        throw error;
    }
};