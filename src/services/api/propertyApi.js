import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Sesuaikan dengan URL backend Anda
});

// API untuk get all property
export const getAllProperty = () => api.get('/property');

// API untuk filter property by category
export const getPropertyByCategory = (category) => api.get(`/property/${category}`);

// API untuk filter property by location
export const getPropertyByLocation = (location) => api.get(`/property/location/${location}`);

// API untuk add property (hanya dapat diakses oleh admin)
export const addProperty = (property) => api.post('/property/addProperty', property);

// API untuk edit property by ID (hanya dapat diakses oleh admin)
export const editPropertyById = (id, property) => api.put(`/property/editProperty/${id}`, property);

// API untuk delete property by ID (hanya dapat diakses oleh admin)
export const deletePropertyById = (id) => api.delete(`/property/${id}`);