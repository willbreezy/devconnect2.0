/**
 *  la configuration de réducteurs combine plusieurs réducteurs pour créer l'état global
 */
import { combineReducers } from 'redux';
import alert from './reducteurAlerte';
import auth from './reducteurAuth';
import profile from './reducteurProfil';
import post from './reducteurPost';

export default combineReducers({
  alert,
  auth,
  profile,
  post
});