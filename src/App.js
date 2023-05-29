import { BrowserRouter, Route, Routes, Link,NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Router</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="about" >About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
