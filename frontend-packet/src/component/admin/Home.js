import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'


export default function Home() {

    const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books').then(res => {
      setData(res.data.data)
        }).catch(err => console.log(err))
    }, [])
    let i = 0;

 
    const deleteBook = (id) => {
          axios.delete(`http://127.0.0.1:8000/api/books/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);
            alert(res.data.message); 
            window.location.reload(); 
          })
    }
  return (
    <>
    <h1 className='d-flex justify-content-center mb-3 mt-3'>Book Store Admin side</h1>
    <div className='container mt-3'>

    <a href="/adminADDBook" type="button" className="btn btn-success">Add Books</a>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Description</th>
      <th scope="col">Genre</th>
      <th scope="col">ISBN</th>
      <th scope="col">Publisher</th>
      <th scope="col">Published</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {data.map(books => ( 
        <tr key={books.id}>
        <th scope="row">{ ++i }</th>
        <td>{books.title}</td>
        <td>{books.author}</td>
        <td>{books.description}</td>
        <td>{books.genere}</td>
        <td>{books.isbn}</td>
        <td>{books.publisher}</td>
        <td>{books.published}</td>
        <td><img src={books.image} width="50" alt='books photos'/></td>
        <td><button className="mb-1" onClick={() => deleteBook(books.id)}> <i className="fa fa-trash" aria-hidden="true"></i> </button>
        <button><i className="fa fa-pencil" aria-hidden="true"></i></button></td>
        </tr>
    ))}
  </tbody>
</table>
    </div>
    </>
  )
}
