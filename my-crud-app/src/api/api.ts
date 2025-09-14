import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://68c60df1442c663bd0262f4e.mockapi.io/item', // seu endpoint MockAPI
  headers: { 'Content-Type': 'application/json' },
});
