import { MutatingDots } from 'react-loader-spinner';
import { MainContainer } from '../style/style';

export default function Loading() {
  return (
    <MainContainer>
      <MutatingDots
        height={90}
        width={90}
        color="#a7ecf8"
        secondaryColor="#fff"
        ariaLabel="loading-indicator"
      />
      <h1 style={{ color: '#fff' }}>Carregando...</h1>
    </MainContainer>
  );
}
