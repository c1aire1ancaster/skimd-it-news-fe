import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://news-project-8i4e.onrender.com/api',
});

export const getArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const upVoteArticle = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.updatedArticle;
    });
};

export const downVoteArticle = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data.updatedArticle;
    });
};
