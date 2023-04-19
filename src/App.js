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
            <div className={styles.container__errorMessage}>
              <h2 className={styles.h2__errorMessage}>404 - page not found!</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
