import axios from 'axios';

const YOUR_ACCESS_KEY = '3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4'; 

const api = axios.create(`https://api.unsplash.com/photos?client_id=${YOUR_ACCESS_KEY}`);

export default api;
