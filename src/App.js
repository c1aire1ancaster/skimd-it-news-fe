import { Route, Routes } from 'react-router-dom';
import styles from './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import UserLogIn from './components/UserLogIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<UserLogIn />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<IndividualArticle />} />
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
