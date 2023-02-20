import React from 'react';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home"
import AdminHome from "./component/admin/Home"
import BookAdd from "./component/admin/BookAdd"
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/adminADDBook" element={<BookAdd/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
