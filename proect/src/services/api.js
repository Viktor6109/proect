// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

// export const getAllMenuItems = async () => {
//   const response = await axios.get('/menu');
//   return response.data;
// };

// export const getCategories = async () => {
//   const response = await axios.get('/categories');
//   return response.data;
// };

// export const getMenuItemById = async id => {
//   const response = await axios.get(`/menu/${id}`);
//   return response.data;
// };

// export const getMenuItemsWithCategory = async category => {
//   const response = await axios.get(`/menu?category=${category}`);
//   return response.data;
// };

import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/menu';
axios.defaults.baseURL = 'http://localhost:8000';

const getAllMenuItems = () =>
  axios.get(`/menu`).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`/menu/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`/menu/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post(`/menu`, item).then(response => response.data);

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
