import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ScreenContext, UserContext } from '../Contexts/UserContext';
import { Forms, MainContainer } from '../style/style';
import baseAPI from '../services/api';
import { Watch } from 'react-loader-spinner';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AlertDialog from './AlertDialog';

export default function NewDeposit() {
  const { token } = useContext(UserContext);
  const { setScreen } = useContext(ScreenContext);
  const [newDeposit, setNewDeposit] = useState('');
  const [depositDescription, setDepositDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  const character = 'deposit';
  const navigate = useNavigate();

  function handleNewDeposit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log('submitou');
    const message = {
      character,
      value: newDeposit,
      description: depositDescription,
    };

    const promise = baseAPI.put('/balance-sheet/new-registry', message, {
      headers: { Authorization: `Bearer ${token}` },
    });
    promise.then((response) => {
      setIsLoading(false);
      setScreen(response.data);
      navigate('/main');
    });
    promise.catch((error) => {
      setIsLoading(false);
      alert(error.response.data);
    });
  }
  return (
    <MainContainer>
      <h2 className="header">Nova entrada</h2>
      <ArrowBackIosRoundedIcon
        onClick={handleOpenDialog}
        sx={{ position: 'absolute', top: 25, right: 50, color: '#fff' }}
      />
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
        <button disabled={isLoading} type="submit">
          {isLoading ? (
            <Watch height={40} width={40} color="#fff" />
          ) : (
            <p>Salvar entrada</p>
          )}
        </button>
      </Forms>
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
