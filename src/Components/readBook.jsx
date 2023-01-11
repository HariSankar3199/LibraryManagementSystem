import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/readBook.css'

const ReadBook = () => {
  let [book, setBook] = useState([])
  let params = useParams()
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:3500/books/${params.id}`)
      let data = await response.json()
      setBook(data)
    }
    fetchData()
  }
  )
  return (
    <div className="readBook_Container">
      <h1>Read Book</h1>
      <div className="redBook_main">
        <h1>{book.title}</h1>
        <p>{book.shortDescription}</p>
        <p>{book.longDescription}</p>
      </div>
    </div>
  );
}

export default ReadBook;