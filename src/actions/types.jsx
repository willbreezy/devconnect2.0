/**
 * Actions liées aux alertes
 */

export const SET_ALERT = 'SET_ALERT'; // definir une alerte
export const REMOVE_ALERT = 'REMOVE_ALERT'; // supprimer une alerte

/**
 * Actions liées à l'authentification
 */
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'; //inscription réussie
export const REGISTER_FAIL = 'REGISTER_FAIL'; // Echec de l'inscription
export const USER_LOADED = 'USER_LOADED'; // chargement des informations de l'utilisateur
export const AUTH_ERROR = 'AUTH_ERROR'; // erreur d'authentification
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; // connexion réussie
export const LOGIN_FAIL = 'LOGIN_FAIL'; // echec de la connexion
export const LOGOUT = 'LOGOUT'; // déconnexion

/**
 * Actions liées aux profils
 */
export const GET_PROFILE = 'GET_PROFILE'; // récuperer le profil de l'utilisateur actuel
export const GET_PROFILES = 'GET_PROFILES'; // récupérer tous les profils 
export const GET_REPOS = 'GET_REPOS'; // recuperer les dépots github
export const NO_REPOS = 'NO_REPOS'; // Aucun dépot github trouvé
export const UPDATE_PROFILE = 'UPDATE_PROFILE'; // mise à jour du profil
export const CLEAR_PROFILE = 'CLEAR_PROFILE'; // effacer le profil actuel
export const PROFILE_ERROR = 'PROFILE_ERROR'; // erreur lors de la récupération ou de la mise à jour 
export const ACCOUNT_DELETED = 'ACCOUNT_DELETED'; // compte et profil supprimés

/**
 * Actions liées aux publications(posts)
 */
export const GET_POSTS = 'GET_POSTS'; // récuperer toutes les publications 
export const GET_POST = 'GET_POST'; // récuperer une publication spécifique 
export const POST_ERROR = 'POST_ERROR'; // erreur lors de la recuperation ou de la mise à jour des publications
export const UPDATE_LIKES = 'UPDATE_LIKES'; // mettre à jour les likes de la publication
export const DELETE_POST = 'DELETE_POST'; // supprimer une publication 
export const ADD_POST = 'ADD_POST'; // ajouter une publication
export const ADD_COMMENT = 'ADD_COMMENT'; // ajouter un commentaire à une publication 
export const REMOVE_COMMENT = 'REMOVE_COMMENT'; // supprimer un commentaire à une publication