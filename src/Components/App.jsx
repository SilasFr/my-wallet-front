import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
