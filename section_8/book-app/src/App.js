import './App.css';
import MuiTest from './pages/MuiTest';
import Layout from './common/Layout';
import BookIndex from './pages/books/BookIndex';
import BookEdit from './pages/books/BookEdit';
import BookDetail from './pages/books/BookDetail';
import BookSearch from './pages/books/BookSearch';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const STORAGE_KEY = 'books'

  const [books, setBooks ] = useState(()=>{
    const saved = localStorage.getItem(STORAGE_KEY); 
    const initialValue = JSON.parse(saved);
    
    return initialValue || [] ;
  }) // 本の情報 配列

  // 初回マウント時に localStorage内データを useStateに持たせる 
  // useEffect(()=>{ if (localStorage.getItem(STORAGE_KEY)) {
  //   try { 
  //     setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY))) 
  //   } catch(e) { 
  //     console.log(e)
  //   } 
  // }},[])

  // booksが更新されたらlocalStorageにも保存する
  useEffect(()=>{ 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))}, 
  [books]) 

  return (<>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookIndex books = {books}/>} />
        <Route path="search" element={<BookSearch books = {books} setBooks = {setBooks}/>} /> 
        <Route path="edit" element={<BookEdit />} >
          <Route path=":id" element={<BookDetail books = {books}/>} /> 
        </Route>
        <Route path="mui-test" element={<MuiTest />} />
      </Route> 
    </Routes>
  </>
  );
}

export default App;
