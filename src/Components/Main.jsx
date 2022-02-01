import { Container, Feed } from "../style/style";

export default function Main() {
  return (
    <Container>
      <div className="header">
        <h2>Olá, Fulano</h2>
        <button>{">"}</button>
      </div>
      <Feed>
        <p>Não há registros de entrada ou saída</p>
      </Feed>

      <div className="menu">
        <button>Nova entrada</button>
        <button>Nova saída</button>
      </div>
    </Container>
  );
}
