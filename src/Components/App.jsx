import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/nova-saida" />
          <Route path="/nova-entrada" />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
