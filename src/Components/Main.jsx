import { MainContainer, Feed } from '../style/style';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenContext, UserContext } from '../Contexts/UserContext';
import BalanceSheet from './BalanceSheet';
import MainMenu from './MainMenu';
import Swal from 'sweetalert2';
import baseAPI from '../services/api';

export default function Main() {
  const { token } = useContext(UserContext);
  const { screen } = useContext(ScreenContext);
  const [currentUser, setCurrentUser] = useState();
  const [registry, setRegistry] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const message = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = baseAPI.get('/balance-sheet', message);
    promise.then((response) => {
      setCurrentUser(response.data.user);
      setRegistry(response.data.balanceSheet);
    });
    promise.catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: error.response.data,
        icon: 'error',
      });
    });
  }, [screen, token]);

  if (!currentUser && !registry) {
    return <h1>Carregando</h1>;
  }
  console.log(registry);
  return (
    <MainContainer>
      <div className="header">
        <h2>Olá, {currentUser.name}</h2>
        <ion-icon
          name="log-out-outline"
          onClick={() => {
            navigate('/');
          }}
        ></ion-icon>
      </div>
      <Feed>
        {registry?.balanceSheet.length !== 0 ? (
          <BalanceSheet balanceSheetObject={registry} />
        ) : (
          <p className="empty">Não há registros de entrada ou saída</p>
        )}
      </Feed>
      <MainMenu />
    </MainContainer>
  );
}
