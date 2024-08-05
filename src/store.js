/**
 *  cette configuration de store est structurée pour gérer le token d'authentification et synchroniser son état entre Redux et le stockage local.
 */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import reducteurRoot from './reducteurs/reducteurRoot';
import AuthJeton from './utils/AuthJeton';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducteurRoot,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

/*
    configurer un écouteur d'abonnement de magasin pour stocker
    le jeton des utilisateurs dans localStorage
 */

/*
  initialiser l'état actuel de magasin redux pour la comparaison des abonnements en 
  évitant les erreurs indéfinies
 */
let currentState = store.getState();

store.subscribe(() => {
  // garder une trace de l'état précédent et actuel pour comparer les changements
  let previousState = currentState;
  currentState = store.getState();
  //si le jeton change, définissez la valeur dans les en-tetes localStorage et axios
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    AuthJeton(token);
  }
});

export default store;