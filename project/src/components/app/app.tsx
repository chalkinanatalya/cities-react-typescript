import MainScreen from '../../pages/main-screen/main-screen';

type AppMainProps = {
  proposalCount: number
}

function App({proposalCount}: AppMainProps): JSX.Element {
  return (
    <MainScreen proposalCount={proposalCount}/>
  );
}

export default App;
