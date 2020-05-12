import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.unsplash.com/photos/random?client_id=3cnwPgyGfWgVkZ5UhUvqdlc1qL-kBR4PM3xYQr_Ipa4'});

export default api;