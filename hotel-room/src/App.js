import { Route,Routes,BrowserRouter } from "express";
import Home from './'

function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
