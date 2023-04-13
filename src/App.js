import { Route, Routes } from 'react-router-dom';
import './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import ArticleListByTopic from './components/ArticleListByTopic';
import UserLogIn from './components/UserLogIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<IndividualArticle />} />
        <Route path="/topic/:topic" element={<ArticleListByTopic />} />
        <Route path="/userlogin" element={<UserLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
