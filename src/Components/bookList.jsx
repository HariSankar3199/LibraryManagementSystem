import { useEffect, useState } from "react";
import '../Styles/bookList.css'
import { useNavigate,useLocation } from "react-router-dom";
const BookList = () => {
    let location=useLocation()
    let navigate=useNavigate()
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:3500/books')
            let data = await response.json()
            setBooks(data)
            // console.log(data);
        }
        fetchData()
    }, [books])
    // let handleDelete=(id,title)=>{   //deleting from ui
    //     setBooks(books.filter(y=>y.id!=id))
    //     alert(`${title} is deleted`)
    // }
    //deleting from server
    // books> state
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:3500/books/${id}`,{
            method:'DELETE'
        
        })
        alert(`${title} will be deleted permenently`)
    }
    
    let read=(id)=>{
        // fetch(`http://localhost:3500/books/${id}`)
        // alert(` read ${title}`)
        if(location.pathname=='/admin/book-list'){
        navigate(`/admin/book-list/${id}`)}
        else{
            navigate(`/user/book-list/${id}`)
        }
    }


    return (
        <div className="bookList">
            <h1>Book List</h1>
            <p>Available no of Books:{books.length}</p>
            <div className="book_section">

            {
                books.map((b)=>(
                    <div className="books"> 
                        <div className="images">
                            <img src={b.thumbnailUrl} alt="" />
                        </div>
                        <div className="books_data">
                        <h3>{b.title}</h3>
                     {/* <p>Title:{b.title}</p> */}
                     <p>Authors:{b.authors.toString()}</p>
                     <p>Categories:{b.categories.toString()}</p>
                     <p>PageCount:{b.pageCount}</p>
                     <button id="rdbtn" onClick={()=>read(b.id,b.title)}>Read More</button>
                     { location.pathname=='/admin/book-list' && <button id="btn" onClick={()=>handleDelete(b.id,b.title)}>Delete</button>}
                        </div>
                     
                    </div>
                )) 
            }
            </div>
           
        </div>
        
    );
}

export default BookList;