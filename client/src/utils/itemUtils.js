import API from '../services/api';

export const fetchItems = async () => {
    try {
        const { data } = await API.get('/items');
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};
