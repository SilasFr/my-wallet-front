import { MainContainer, Feed } from '../style/style';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenContext, UserContext } from '../Contexts/UserContext';
import BalanceSheet from './BalanceSheet';
import MainMenu from './MainMenu';
import Swal from 'sweetalert2';
import baseAPI from '../services/api';
import Loading from './LoadingWarning';
import AlertDialog from './AlertDialog';

export default function Main() {
  const { token } = useContext(UserContext);
  const { screen } = useContext(ScreenContext);
  const [currentUser, setCurrentUser] = useState();
  const [registry, setRegistry] = useState();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

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
      if (error.response.status === 401) {
        console.log('entrou');
        handleOpenDialog();
      } else {
        console.log(error.response);
        Swal.fire({
          title: 'Error!',
          text: error.response.data,
          icon: 'error',
        });
      }
    });
  }, [screen, token]);

  if (!currentUser && !registry) {
    return (
      <>
        <Loading />;
        <AlertDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          alertText={'Erro! Não autorizado. Volte para a tela de login'}
          option1={'ok'}
          option1Action={() => navigate('/')}
          // option2Action={handleCloseDialog}
        />
      </>
    );
  }

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
      <AlertDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        alertText={'Deseja voltar sem salvar alterações?'}
        option1={'Sim'}
        option2={'Não'}
        option1Action={() => navigate(-1)}
        option2Action={handleCloseDialog}
      />
    </MainContainer>
  );
}
