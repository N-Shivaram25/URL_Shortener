import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlForm from "./components/UrlForm";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UrlForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
