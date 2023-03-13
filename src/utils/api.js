import axios from "axios";

const newsSite = axios.create({ baseURL: 'https://news-project-8i4e.onrender.com/api'});

export const getArticles = () => {
  return newsSite.get('./articles').then(({data}) => {
    return data.articles;
  });
};