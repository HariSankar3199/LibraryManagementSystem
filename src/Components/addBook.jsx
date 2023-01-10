import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addBook.css'
const AddBook = () => {
    let navigate=useNavigate()
    let[title,setTitle] =useState('')
    let[authors,setAuthors] =useState('')
    let[categories,setCategories] =useState('')
    let[pageCount,setPageCount] =useState('')
    let[shortDescription,setShortDescription] =useState('')
    let[longDescription,setLongDescription] =useState('')
    let[thumbnailUrl,setThumbnailUrl] =useState('')
   let handleLogin=(e)=>{
    e.preventDefault();
    //data to be posted
    let data={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
    //posting to server
    fetch('http://localhost:3500/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
     })
   alert('book added successfully')
    navigate('/admin/book-list')

  }

    return ( 
        <div className="addBook">
            <h1>Add a Books</h1>
        
               
              <div className="addBookform">
                <form action="" onSubmit={handleLogin}>
                    <div className="title">
                        {/* <label htmlFor="">Title</label> */}
                        <input type="text" required placeholder='Enter your Tittle' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="authors">
                    {/*  <label htmlFor="">Author</label> */} 
                        <input type="text" required placeholder='Enter Authors name'value={authors} onChange={(e)=>setAuthors(e.target.value)} />
                    </div>
                    <div className="categories">
                    {/* <label htmlFor="">Categories</label> */} 
                        <input type="text" required placeholder='Enter categories name' value={categories} onChange={(e)=>setCategories(e.target.value)}/>
                    </div>
                    <div className="pageCount">
                    {/*  <label htmlFor="">pageCount</label> */} 
                        <input type="number" required placeholder='Enter pageCount name' value={pageCount} onChange={(e)=>setPageCount(e.target.value)}/>
                    </div>
                    <div className="shortDescription">
                    {/*  <label htmlFor="">ShortDescription</label> */} 
                        <textarea required placeholder='Enter shortDescription name'  cols="30" rows="10"  value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription">
                    {/*  <label htmlFor="">LongDescription</label> */} 
                    <textarea required placeholder='Enter longDescription name'  cols="30" rows="10" value={longDescription} onChange={(e)=>setLongDescription(e.target.value)}></textarea>
                        
                    </div>
                    <div className="thumbnailUrl">
                    {/*  <label htmlFor="">ThumbnailUrl</label> */} 
                        <input type="text" required placeholder='Enter Authors name'value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} />
                    </div>
                    
                 <button>Add Book</button>
                </form>
                </div>

            </div>
        
     );
}
 
export default AddBook;