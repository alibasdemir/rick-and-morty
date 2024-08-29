import axios from "axios"
import { API_ENDPOINTS } from "./constants"

export const getAllCharacters = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.CHARACTERS);
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