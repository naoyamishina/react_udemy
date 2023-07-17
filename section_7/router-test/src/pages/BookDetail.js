import { getBook } from '../functions/book' // 必要な関数をインポート 
import { useParams } from 'react-router-dom'

const BookDetail = () => {
  const params = useParams() // URLのパラメータを取得
  console.log(params)
  
  const book = getBook(parseInt(params.id, 10)) // 文字列->数値(10進数)に変換
  
  return (<>本の詳細ページ
    <p>id: { book.id }</p> 
    <p>タイトル: {book.title}</p>
  </>)
}

export default BookDetail
