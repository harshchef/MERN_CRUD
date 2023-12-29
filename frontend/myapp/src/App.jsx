
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Create from "./components/Create";
// import Read from "./components/Read";
// import Update from "./components/Update";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route exact path="/create" element={<Create />} />
//           <Route path="/read" element={<Read />} />
//           <Route path="/:id" element={<Update />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1212284111/photo/blue-light-defocused-blurred-motion-abstract-background.jpg?s=2048x2048&w=is&k=20&c=FrlrXWKwiGLVhF0B4wEKbvC4rQNruFw8z0uR6fZRK3I=')",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        color: "#fff", // Set your desired font color
      }}
    >
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
