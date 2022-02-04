import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../Contexts/UserContext";
import { Forms, MainContainer } from "../style/style";

export default function NewDeposit() {
  const { token } = useContext(UserContext);
  const [newDeposit, setNewDeposit] = useState("");
  const [depositDescription, setDepositDescription] = useState("");
  const character = "deposit";

  function handleNewDeposit(e) {
    e.preventDefault();
    const message = {
      character,
      newDeposit,
      depositDescription,
    };
    console.log(message);

    const promise = axios.post(
      "http://localhost:5000/balance-sheet/new-registry",
      message,
      { headers: { Authorization: `Bearer ${token}` } }
    );
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
