/**
 * Nous créons des actions avec Redux pour définir et supprimer des alertes
 */

import { v4 as uuidv4 } from 'uuid'; // la bibliothèque uuid est utilisé ici pour générer un identifiant unique
import { SET_ALERT, REMOVE_ALERT } from './types'; 

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
  const id = uuidv4();  // identifiant unique généré 
  
  //nous envoyons une alerte de type SET_ALERT contenant un message, le type d'alerte et l'identifiant unique
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout); // après le délai de 5s passé, nous retirons retirons l'alerte avec l'id grace à REMOVE_ALERT
};