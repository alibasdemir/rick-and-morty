import axios from "axios"
import { API_ENDPOINTS } from "./constants"

export const getAllCharacters = async (page = 1, searchTerm = '', charStatus = '', charGender = '') => {
    try {
        let queryString = `?page=${page}`;
        if (searchTerm) queryString += `&name=${searchTerm}`;
        if (charStatus) queryString += `&status=${charStatus}`;
        if (charGender) queryString += `&gender=${charGender}`;

        const response = await axios.get(`${API_ENDPOINTS.CHARACTERS}${queryString}`);
        return response.data;
    } catch (error) {
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

export const getEpisodeName = async (episodeUrl) => {
    try {
      const response = await axios.get(episodeUrl);
      return response.data.name;
    } catch (error) {
      console.error("Axios error: ", error);
      throw error;
    }
  };