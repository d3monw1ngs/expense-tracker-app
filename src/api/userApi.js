import axios from "axios";

axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api';

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}`} : {};
};

export const fetchCurrentUser = async () => {
    const response = await axios.get('/users/current', {
        headers: getAuthHeader(),
    });
    return response.data;
}