import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyEmptyScreen from '../../pages/property-empty-screen/property-empty-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer, Offers } from '../../types/offer';

type AppMainProps = {
  proposalCount: number;
  offers: Offers;
  offer: Offer;
}


function App({ proposalCount, offer, offers }: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen proposalCount={proposalCount} offer={offer} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen offers={offers} offer={offer} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FavoritesEmpty}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesEmptyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.PropertyEmpty}
          element=
            {<PropertyEmptyScreen />}
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={
            <PropertyScreen
              offers={offers} offer={offer}
            />
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
