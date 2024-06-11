import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Sesuaikan dengan URL backend Anda
});

// API untuk get all photo (hanya dapat diakses oleh admin)
export const getAllPhotos = () => api.get('/photos');

// API untuk edit foto (berdasarkan TOKEN yang login)
export const editPhoto = (photo) => api.put('/photos/photo', photo);
