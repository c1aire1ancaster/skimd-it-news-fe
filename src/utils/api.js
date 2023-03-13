import axios from 'axios';

const newsSite = axios.create({
  baseURL: 'https://news-project-8i4e.onrender.com/api',
});

export const getArticles = (article_id) => {
  let path = './articles';

  console.log(article_id);
  // if (article_id) {
  //   path += `/${article_id}`
  // }

  return newsSite
    .get(path, { params: { article_id: article_id } })
    .then(({ data }) => {
      console.log(data, '<in api');
    });
};
