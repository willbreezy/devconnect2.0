import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Barredenavigation from './composants/miseenpage/Barredenavigation'
import PageAccueil from './composants/miseenpage/PageAccueil';
import PageInscription from './composants/auth/PageInscription';
import PageConnexion from './composants/auth/PageConnexion';
import Alerte from './composants/miseenpage/Alerte';
import PageTableaudebord from './composants/tableau/PageTableaudebord';
import Formprofil from './composants/forms-profil/Formprofil';
import AjouterExperience from './composants/forms-profil/AjouterExperience'
import AjouterEducation from './composants/forms-profil/AjouterEducation'
import ListeProfils from './composants/profils/ListeProfils';
import Profil from './composants/profil/Profil';
import Listepublicationsindividuel from './composants/posts/Listepublicationsindividuel';
import Afficherpublication from './composants/post/Afficherpublication';
import PageNontrouvee from './composants/miseenpage/PageNontrouvee'
import RoutePrivee from './composants/routing/RoutePrivee';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authentifier-utilisateur';
import AuthJeton from './utils/AuthJeton';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      AuthJeton(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Barredenavigation />
        <Alerte />
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="register" element={<PageInscription />} />
          <Route path="login" element={<PageConnexion />} />
          <Route path="profiles" element={<ListeProfils />} />
          <Route path="profile/:id" element={<Profil />} />
          <Route
            path="dashboard"
            element={<RoutePrivee component={PageTableaudebord} />}
          />
          <Route
            path="create-profile"
            element={<RoutePrivee component={Formprofil} />}
          />
          <Route
            path="edit-profile"
            element={<RoutePrivee component={Formprofil} />}
          />
          <Route
            path="add-experience"
            element={<RoutePrivee component={AjouterExperience} />}
          />
          <Route
            path="add-education"
            element={<RoutePrivee component={AjouterEducation} />}
          />
          <Route path="posts" element={<RoutePrivee component={Listepublicationsindividuel} />} />
          <Route path="posts/:id" element={<RoutePrivee component={Afficherpublication} />} />
          <Route path="/*" element={<PageNontrouvee />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;