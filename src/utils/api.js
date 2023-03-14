import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://news-project-8i4e.onrender.com/api',
});

export const getArticles = (article_id) => {
  let path = '/articles';

  if (article_id) {
    path += `/${article_id}`;
  }

  return newsApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getUser = (author) => {
  return newsApi.get(`/users/${author}`).then(({ data }) => {
    return data.users.avatar_url;
  });
};
