import React from 'react'
import axios from 'axios'

export default function BookAdd() {

  
    const submitHandler = (event) => {
        event.preventDefault();
        let bName = document.getElementById('bookName').value
        let aName = document.getElementById('author').value
        let desc = document.getElementById('description').value
        let genere = document.getElementById('genere').value
        let isbn = document.getElementById('isbn').value
        let image = document.getElementById('image').value
        let publisher = document.getElementById('publisher').value
        let published = document.getElementById('published').value

        const books = { 
            title: bName,
            author: aName,
            genere: genere,
            description: desc,
            isbn: isbn,
            image: image,
            publisher: publisher,
            published: published

        };
        axios.post('http://127.0.0.1:8000/api/books', books).then(res => {  
            console.log(res);  
            console.log(res.data); 
        })
    }

  return (
    <>
        <h1 className='d-flex justify-content-center mb-3 mt-3'>Add New Books</h1>
        <div className='container mt-3 col-5'>

        <a href="/admin" type="button" className="btn btn-success mb-3">Books LIst</a>
            <form onSubmit={submitHandler}>
            <div className="mb-3 mt-3">
                <label for="bookName" className="form-label">Book Name</label>
                <input type="text" className="form-control" id="bookName" />
            </div>
            <div className="mb-3">
                <label for="author" className="form-label">Author Name</label>
                <input type="text" className="form-control" id="author" />
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" ></textarea>
            </div>
            <div className="mb-3">
                <label for="genere" className="form-label">Genre</label>
                <input type="text" className="form-control" id="genere" />
            </div>
            <div className="mb-3">
                <label for="isbn" className="form-label">ISBN</label>
                <input type="text" className="form-control" id="isbn" />
            </div>
            <div className="mb-3">
                <label for="image" className="form-label">Image</label>
                <input type="file" className="form-control" id="image" />
            </div>
            <div className="mb-3">
                <label for="publisher" className="form-label">Publisher</label>
                <input type="text" className="form-control" id="publisher" />
            </div>
            <div className="mb-3">
                <label for="published" className="form-label">Published</label>
                <input type="date" className="form-control" id="published" />
            </div>
            <button className="btn btn-primary">Submit</button>
            </form>          
        </div>
    </>
  )
}
