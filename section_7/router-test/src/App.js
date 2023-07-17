import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Information from './pages/Information';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import BookList from "./pages/BookList";
import BookIndex from "./pages/BookIndex"; 
import BookDetail from "./pages/BookDetail";
import { Routes, Route, NavLink, Navigate} from 'react-router-dom';

function App() {
  const isAuthenticated = true

  return (<>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} /> path="/" はindexでも可 
        <Route path="/information" element={<Information />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={ isAuthenticated ? <Navigate to="/contact" /> : <Home /> } />
        <Route path="/book-list" element={<BookList />} > // url用 
          <Route index element={<BookIndex />} /> // 一覧表示 
          <Route path=":id" element={<BookDetail />}/> // 詳細表示
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </> );
}

export default App;
