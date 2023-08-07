import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyEmptyScreen from '../../pages/property-empty-screen/property-empty-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';

type AppMainProps = {
  proposalCount: number
}

function App({proposalCount}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen proposalCount={proposalCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.FavoritesEmpty}
          element={<FavoritesEmptyScreen />}
        />
        <Route
          path={AppRoute.PropertyEmpty}
          element={<PropertyEmptyScreen />}
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyScreen />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
