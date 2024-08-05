import api from '../utils/api';
import { setAlert } from './alertes';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

// Action pour récupérer tous les posts depuis l'endpoint /posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/posts');

    dispatch({ // on envoie les données des posts 
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ // on envoie le message et le status de l'erreur
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Action asynchrone pour ajouter un like à un et un seul post spécifique en envoyant une requete PUT 
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/like/${id}`);

    dispatch({ // cette action est envoyée avec l'id du post et les données des likes
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Action  asynchrone pour supprimer un like d'un post bien spécifique 
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Action asynchrone pour supprimer un post en envoyant une requete DELETE
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    dispatch(setAlert('Post supprimé', 'avec succès'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Action asynchrone pour ajouter un nouveau post en envoyant la requete formdata à l'endpoint /posts 
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/posts', formData);

    dispatch({ // cette action est envoyée avec les données du post et une alerte de succès est affichée
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post créé', 'avec succès'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Récupérer un post spécifique
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// action asynchrone pour ajouter un commentaire à un post spécifique en envoyant formdata  
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/posts/comment/${postId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Commentaire ajouté', 'avec succès'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// action asynchrone pour supprimer un commentaire  spécifique à un post en envoyant une requete DELETE
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Commentaire supprimé', 'avec succès'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};