import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import Login from "./Login";
import Main from "./Main";
import NewDeposit from "./NewDeposit";
import NewWithdrawal from "./NewWithdrawal";
import Signup from "./Signup";

export default function App() {
  const [token, setToken] = useState();
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/nova-saida" element={<NewWithdrawal />} />
          <Route path="/nova-entrada" element={<NewDeposit />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
