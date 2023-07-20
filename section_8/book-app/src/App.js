import './App.css';
import MuiTest from './pages/MuiTest';
import Layout from './common/Layout';
import BookIndex from './pages/books/BookIndex';
import BookEdit from './pages/books/BookEdit';
import BookDetail from './pages/books/BookDetail';
import BookSearch from './pages/books/BookSearch';
import { Route, Routes } from 'react-router-dom';
import { usePersist } from './hooks/usePersist';

function App() {
  const STORAGE_KEY = 'books'

  const [books, setBooks ] = usePersist(STORAGE_KEY)

  return (<>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookIndex books = {books}/>} />
        <Route path="search" element={<BookSearch books = {books} setBooks = {setBooks}/>} /> 
        <Route path="edit" element={<BookEdit />} >
          <Route path=":id" element={<BookDetail books = {books} setBooks = {setBooks}/>} /> 
        </Route>
        <Route path="mui-test" element={<MuiTest />} />
      </Route> 
    </Routes>
  </>
  );
}

export default App;
