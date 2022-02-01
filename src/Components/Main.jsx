import { MainContainer, Feed } from "../style/style";

export default function Main() {
  return (
    <MainContainer>
      <div className="header">
        <h2>Olá, Fulano</h2>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      <Feed>
        <p>Não há registros de entrada ou saída</p>
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
