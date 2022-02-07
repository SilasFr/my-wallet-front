import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContext, UserContext } from "../Contexts/UserContext";
import { Forms, MainContainer } from "../style/style";

export default function NewWithdrawal() {
  const { token } = useContext(UserContext);
  const { setScreen } = useContext(ScreenContext);

  const [newWithdrawal, setNewWithdrawal] = useState("");
  const [withdrawalDescription, setWithdrawalDescription] = useState("");
  const character = "withdrawal";
  const navigate = useNavigate();

  function handleNewDeposit(e) {
    e.preventDefault();
    const message = {
      character,
      value: newWithdrawal,
      description: withdrawalDescription,
    };
    const promise = axios.put(
      "http://localhost:5000/balance-sheet/new-registry",
      message,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    promise.then((response) => {
      setScreen(response.data);
    });
    promise.catch((error) => {
      alert(error.response);
    });
    navigate("/main");
  }
  return (
    <MainContainer>
      <h2 className="header">Nova saída</h2>
      <Forms onSubmit={handleNewDeposit}>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={newWithdrawal}
          onChange={(e) => {
            setNewWithdrawal(e.target.value);
          }}
        />
        <input
          type="text"
          name="descrição"
          placeholder="Descrição"
          onChange={(e) => {
            setWithdrawalDescription(e.target.value);
          }}
        />
        <button type="submit">
          <p>Salvar saída</p>
        </button>
      </Forms>
    </MainContainer>
  );
}
