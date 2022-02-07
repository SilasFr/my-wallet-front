import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const navigate = useNavigate();

  function handleDeposit() {
    navigate("/nova-entrada");
  }
  function handleWithdrawal() {
    navigate("/nova-saida");
  }

  return (
    <div className="menu">
      <button type="button" onClick={handleDeposit}>
        <ion-icon name="add-circle-outline"></ion-icon>
        <p>Nova entrada</p>
      </button>
      <button type="button" onClick={handleWithdrawal}>
        <ion-icon name="remove-circle-outline"></ion-icon>
        <p>Nova saída</p>
      </button>
    </div>
  );
}
