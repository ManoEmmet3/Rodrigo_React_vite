import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api-restaurante-4aeb.onrender.com'  // Altere para a URL da sua API
});

export async function getPratos() {
    const response = await axiosClient.get('/listar-pratos');
    return response;
}
