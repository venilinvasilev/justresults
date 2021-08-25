import createApi from './api';

const port = 8000;
const host = 'localhost'
const url = `http://${host}:${port}/`;

const api = createApi(url);

export async function getAllArticles(query) {
    return await api.get('articles' + (query ? `${query}` : ''));
}
export async function getArticle(id) {
    return await api.get(`articles/${id}`);
}
export async function createArticle(data) {
    return await api.post(`articles`, data);
}
export async function editArticle(data, id) {
    return await api.patch(`articles/${id}`, data);
}
export async function addArticleLike(id) {
    return await api.post(`articles/${id}/like`);
}
export async function registerUser(data) {
    return await api.post('users/register', data);
}
export async function loginUser(data) {
    return await api.post('users/login', data);
}
export async function logoutUser() {
    return await api.get('users/logout');
}
export async function getUserSession() {
    return await api.get('users/session');
}
export async function getMe() {
    return await api.get('users/me');
}
export async function updateMe(data) {
    return await api.patch('users/update-me', data);
}
export async function updatePassword(data) {
    return await api.patch('users/update-password', data);
}
export async function getAllSupplements(query) {
    return await api.get('supplements', query);
}
export async function addSupplement(data) {
    return await api.post('supplements', data);
}
export async function getSupplement(id) {
    return await api.get(`supplements/${id}`);
}
export async function editSupplement(data, id) {
    return await api.path(`supplements/${id}`, data);
}
