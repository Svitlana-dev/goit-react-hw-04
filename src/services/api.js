import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${API_KEY}` },
});

export const fetchImages = async (query, currentPage = 1, perPage = 10) => {
  const { data } = await api.get('/search/photos', {
    params: { query, page: currentPage, per_page: perPage },
  });

  const images = data.results.map((img) => ({
    id: img.id,
    url: img.urls.small,
    regular: img.urls.regular,
    description: img.alt_description || img.description,
    likes: img.likes,
    user: img.user,
  }));

  return {
    images,
    totalPages: data.total_pages,
  };
};
