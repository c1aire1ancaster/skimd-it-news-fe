import { Route, Routes } from 'react-router-dom';
import './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route
          path="/articles/read-article/:article_id"
          element={<IndividualArticle />}
        />
      </Routes>
    </div>
  );
}

export default App;
