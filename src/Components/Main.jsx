import { MainContainer, Feed } from "../style/style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import BalanceSheet from "./BalanceSheet";
import axios from "axios";
import MainMenu from "./MainMenu";
import Swal from "sweetalert2";

export default function Main() {
  const { token } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState();
  const [balanceSheet, setBalanceSheet] = useState();
  useEffect(() => {
    const message = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = axios.get("http://localhost:5000/balance-sheet", message);
    promise.then((response) => {
      setCurrentUser(response.data.user);
      setBalanceSheet(response.data.balanceSheet);
    });
    promise.catch((error) => {
      console.log(error.response);
      Swal.fire({
        title: "Error!",
        text: error.response.data,
        icon: "error",
      });
    });
  }, []);

  if (!currentUser) {
    return <h1>Carregando</h1>;
  }
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
