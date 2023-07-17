import { getBooks } from '../functions/book' // 本用ファイルから必要な関数をインポート 
import { Link } from 'react-router-dom'

const BookIndex = () => {
  const books = getBooks() // 本の配列 
  return (<>本の一覧です。
    <ul>
    { books.map(book => (
      <li key={book.id}>
        <Link to={`/book-list/${book.id}`}> 
        {book.id}: {book.title} </Link>
      </li> 
    ))}
    </ul>
  </>)
}

export default BookIndex 
