import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ArticleDetail from './Components/ArticleDetail';
import CreateArticle from './Components/CreateArticle';
import Header from './Components/Header';
import ArticleLists from './Components/ArticleLists';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article-detail/:id' element={<ArticleDetail />} />
        <Route path='/create-article' element={<CreateArticle />} />
      </Routes>
    </div>
  );
}

export default App;
