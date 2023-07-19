import './App.css';
import MuiTest from './pages/MuiTest';
import Layout from './common/Layout';
import BookIndex from './pages/books/BookIndex';
import BookEdit from './pages/books/BookEdit';
import BookDetail from './pages/books/BookDetail';
import BookSearch from './pages/books/BookSearch';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookIndex />} />
        <Route path="search" element={<BookSearch />} /> 
        <Route path="edit" element={<BookEdit />} >
          <Route path=":id" element={<BookDetail />} /> 
        </Route>
        <Route path="mui-test" element={<MuiTest />} />
      </Route> 
    </Routes>
  </>
  );
}

export default App;
