import { MainContainer, Feed } from "../style/style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import BalanceSheet from "./BalanceSheet";
import axios from "axios";
import MainMenu from "./MainMenu";

export default function Main() {
  const { currentUser } = useContext(UserContext);
  const [balanceSheet, setBalanceSheet] = useState();
  useEffect(() => {
    const message = {
      headers: {
        User: {
          Autorization: `Bearer ${currentUser.token}`,
        },
      },
      body: {},
    };
    const promise = axios.get("http://localhost:5000/balance-sheet", message);
    promise.then((response) => {
      console.log(response.data);
      setBalanceSheet(response.data);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }, []);
  return (
    <MainContainer>
      <div className="header">
        <h2>Olá, {currentUser.name}</h2>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      <Feed>
        {balanceSheet ? (
          <BalanceSheet balanceSheet={balanceSheet} />
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </Feed>

      <MainMenu />
    </MainContainer>
  );
}
