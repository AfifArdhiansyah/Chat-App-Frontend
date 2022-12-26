import api from './api';

export const getConversations = (formData) => api.get('/conversations/user', formData);
export const updateConversation = (formData) => api.put('/conversations/user', formData);