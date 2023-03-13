import { Route, Routes } from 'react-router-dom';
import './styles/App.module.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/api/articles" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
