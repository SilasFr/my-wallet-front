import { useContext, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { ScreenContext, UserContext } from '../Contexts/UserContext';
import baseAPI from '../services/api';
import { Forms, MainContainer } from '../style/style';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AlertDialog from './AlertDialog';

export default function NewWithdrawal() {
  const { token } = useContext(UserContext);
  const { setScreen } = useContext(ScreenContext);

  const [newWithdrawal, setNewWithdrawal] = useState('');
  const [withdrawalDescription, setWithdrawalDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  const character = 'withdrawal';
  const navigate = useNavigate();

  function handleNewDeposit(e) {
    e.preventDefault();
    setIsLoading(true);
    const message = {
      character,
      value: newWithdrawal,
      description: withdrawalDescription,
    };
    const promise = baseAPI.put('/balance-sheet/new-registry', message, {
      headers: { Authorization: `Bearer ${token}` },
    });
    promise.then((response) => {
      setScreen(response.data);
      setIsLoading(false);
      navigate('/main');
    });
    promise.catch((error) => {
      alert(error.response.data);
      setIsLoading(false);
    });
  }
  return (
    <MainContainer>
      <h2 className="header">Nova saída</h2>
      <ArrowBackIosRoundedIcon
        onClick={handleOpenDialog}
        sx={{ position: 'absolute', top: 25, right: 50, color: '#fff' }}
      />
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
        <button disabled={isLoading} type="submit">
          {isLoading ? (
            <Watch height={40} width={40} color="#fff" />
          ) : (
            <p>Salvar saída</p>
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
