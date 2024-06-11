import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.10:3000', // Sesuaikan dengan URL backend Anda
});

// API untuk register
export const registerUser = (user) => api.post('/users/register', user);

// API untuk login dan generate TOKEN
export const loginUser = (credentials) => api.post('/users/login', credentials);

// API untuk get all users (hanya dapat diakses oleh admin)
export const getAllUsers = () => api.get('/users', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

// API untuk edit profile (berdasarkan TOKEN yang login)
export const editUserProfile = (user) => api.put('/users/editProfile', user, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

// API untuk mendapatkan data user berdasarkan TOKEN yang login
export const getUserData = () => api.get('/users/getInfo', {
  headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

// API untuk delete user by id (hanya dapat diakses oleh admin)
export const deleteUserById = (id) => api.delete(`/users/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

// API untuk mengunggah foto profil
export const uploadProfilePhoto = (photo) => {
  const formData = new FormData();
  formData.append('photo', photo);

  return api.post('/photos/photo', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  });
};
