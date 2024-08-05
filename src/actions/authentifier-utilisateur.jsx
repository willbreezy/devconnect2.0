import api from '../utils/api'; // instance d'axios pour les requetes HTTP
import { setAlert } from './alertes'; // action pour afficher des alertes
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// On charge les données utilisateur à partir de ./auth
export const loadUser = () => async (dispatch) => {
  try {
   const res = await api.get('/auth');

    dispatch({ // en cas de succès, envoyer les données utilisateur
      type: USER_LOADED,
     payload: res.data
    });
  } catch (err) {
    dispatch({ // en cas d'échec, une action AUTH_ERROR est envoyée
      type: AUTH_ERROR
    });
  }
};

// action asynchrone pour enregistrer un nouvel utilisateur 
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    dispatch({ // en cas de succès, une action est envoyée avec les données utilisateur et loadUser charge ces données
      type: REGISTER_SUCCESS,
     payload: res.data
    });
    dispatch(loadUser());
  } catch (err) { 
    const errors = err.response.data.errors;

    if (errors) { 
      errors.forEach((error) => dispatch(setAlert(error.msg, 'Attention, erreur !')));
    }

    dispatch({ // en cas d'échec, une action est envoyée et les erreurs sont affichées sous forme d'alertes
      type: REGISTER_FAIL
    });
  }
};

// action pour connecter un utilisateur en envoyant l'email et un le mot de passe 
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
   const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
     payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'Email ou mot de passe invalide')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// action pour déconnecter un utilisateur
export const logout = () => ({ type: LOGOUT });