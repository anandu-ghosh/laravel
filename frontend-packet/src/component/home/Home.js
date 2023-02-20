import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books').then(res => {
      // console.log(res.data)
      setData(res.data.data)
        }).catch(err => console.log(err))
    }, [])
  
  return (
  <div>
  <h1 className='d-flex justify-content-center mb-3 mt-3'>Book Store</h1>
  <div className="row  m-3">
    <div className="input-group">
      <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search..."/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
    <div className="container mt-3">

    <div className="row">
    {data.map(book => (
      <div className="col-3 mt-3" key={book.id}>
        <div className="card">
        <img src={book.image} />
          <div className="card-body">
            <h4 className="card-title d-flex justify-content-center">{book.title}</h4>
            <p className="card-text">{book.description}</p>
            
          </div>
        </div>
      </div>
    ))}
    </div>
      
    </div>
  </div>

// {data.map(book => (
              
//   ))}
  )
}
