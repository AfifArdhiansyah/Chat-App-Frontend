import api from './api';

export const getFriends = (formData) => api.get('/friends/user', formData);