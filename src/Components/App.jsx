import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext, ScreenContext } from "../Contexts/UserContext";
import Login from "./Login";
import Main from "./Main";
import NewDeposit from "./NewDeposit";
import NewWithdrawal from "./NewWithdrawal";
import Signup from "./Signup";

export default function App() {
  const [token, setToken] = useState();
  const [screen, setScreen] = useState();

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <ScreenContext.Provider value={{ screen, setScreen }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/nova-saida" element={<NewWithdrawal />} />
            <Route path="/nova-entrada" element={<NewDeposit />} />
          </Routes>
        </BrowserRouter>
      </ScreenContext.Provider>
    </UserContext.Provider>
  );
}
