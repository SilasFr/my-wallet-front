import { MainContainer, Feed } from "../style/style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import BalanceSheet from "./BalanceSheet";
import axios from "axios";

export default function Main() {
  const { currentUser } = useContext(UserContext);
  const [balanceSheet, setBalanceSheet] = useState();
  useEffect(() => {
    const promise = axios.get("http://localhost:5000/balance-sheet");
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

      <div className="menu">
        <button>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </button>
        <button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </button>
      </div>
    </MainContainer>
  );
}
