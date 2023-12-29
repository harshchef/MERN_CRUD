
// import './App.css'
// import React from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Create from './components/Create';
// import Update from './components/Update';
// import Read from './components/Read';


// function App (){
//   return (
// <div className='App'>

// <BrowserRouter>
// <Navbar/>
// <Routes>


//   <Route exact path='/' element={<Create/>}/>
//   <Route exact path='/read' element={<Read/>}/>
//   <Route exact path='/:id' element={<Update/>} />
// </Routes>

// </BrowserRouter>

// </div>
//   )
// }

// export default App
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;