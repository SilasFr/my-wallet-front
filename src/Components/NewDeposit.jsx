import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ScreenContext, UserContext } from "../Contexts/UserContext";
import { Forms, MainContainer } from "../style/style";

export default function NewDeposit() {
  const { token } = useContext(UserContext);
  const { setScreen } = useContext(ScreenContext);
  const [newDeposit, setNewDeposit] = useState("");
  const [depositDescription, setDepositDescription] = useState("");
  const character = "deposit";
  const navigate = useNavigate();

  function handleNewDeposit(e) {
    e.preventDefault();
    const message = {
      character,
      value: newDeposit,
      description: depositDescription,
    };

    const promise = axios.put(
      "https://my-wallet-back-silas.herokuapp.com/balance-sheet/new-registry",
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
      <h2 className="header">Nova entrada</h2>
      <Forms onSubmit={handleNewDeposit}>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={newDeposit}
          onChange={(e) => {
            setNewDeposit(e.target.value);
          }}
        />
        <input
          type="text"
          name="descrição"
          placeholder="Descrição"
          onChange={(e) => {
            setDepositDescription(e.target.value);
          }}
        />
        <button type="submit">
          <p>Salvar entrada</p>
        </button>
      </Forms>
    </MainContainer>
  );
}
