import axios from 'axios';

//let YOUR_ACCESS_KEY = '3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4'; 

const api = axios.create({ baseURL: 'https://api.unsplash.com/photos'});  


export default api;
