import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import ArticleListByTopic from './components/ArticleListByTopic';
import UserLogIn from './components/UserLogIn';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('harry');

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route
          path="/article/:article_id"
          element={<IndividualArticle loggedInUser={loggedInUser} />}
        />
        <Route path="/topic/:topic" element={<ArticleListByTopic />} />
        <Route
          path="/userlogin"
          element={<UserLogIn setLoggedInUser={setLoggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
