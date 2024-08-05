/**
 *   la configuration Axios avec les intercepteurs est bien mise en place pour gérer les erreurs liées à l'authentification.
 */
import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

// Créer une instance d'axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
/*
 Intercepter toute réponse d'erreur de l'api et vérifier si le jeton 
  n'est plus valide. c'est-à-dire que le jeton a expiré ou que l'utilisateur 
  n'est pas authentifié. se déconnecter de l'utilisateur si le jeton a expiré
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;