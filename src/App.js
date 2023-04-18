import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import UserLogIn from './components/UserLogIn';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953',
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<UserLogIn setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/articles" element={<ArticleList />} />
        <Route
          path="/article/:article_id"
          element={<IndividualArticle loggedInUser={loggedInUser} />}
        />
        <Route
          path="/*"
          element={
            <h2 className={styles.h1__errorMessage}>404 - page not found!</h2>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
