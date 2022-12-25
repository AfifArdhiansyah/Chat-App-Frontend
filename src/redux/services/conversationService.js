import api from './api';

function getLocalAccessToken() {
    const accessToken = window.localStorage.getItem("user");
    return accessToken;
}

export const getConversations = (formData) => api.get('/conversations/user', formData, {
    headers: {
        Authorization: `Bearer ${getLocalAccessToken()}`
    }
});

export const updateConversation = (formData) => {
    const accessToken = getLocalAccessToken();
    if(!accessToken) return;
    return api.put('/conversations/user', formData, {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
    });
}