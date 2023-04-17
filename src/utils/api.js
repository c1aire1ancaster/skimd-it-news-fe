import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://skimd-it.onrender.com/api',
});

export const getArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.articles;
  });
};

export const getUser = (author) => {
  return newsApi.get(`/users/${author}`).then(({ data }) => {
    return data.users.avatar_url;
  });
};

export const getUsers = () => {
  return newsApi.get('./users').then(({ data }) => {
    return data.users;
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

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const upVoteComment = (comment_id) => {
  return newsApi
    .patch(`/comments/${comment_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.updatedComment;
    });
};

export const downVoteComment = (comment_id) => {
  return newsApi
    .patch(`/comments/${comment_id}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data.updatedComment;
    });
};

export const getTopics = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticlesByTopic = (topic) => {
  let path = `/articles`;

  return newsApi
    .get(path, {
      params: {
        topic: topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const postComment = (newComment, article_id) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      console.log(data);
      return data.comment;
    });
};
