/**
    la fonction AuthJeton est conçue pour gérer le stockage et la configuration des tokens JWT pour les appels API.
 */
    import api from './api';

    // store our JWT in LS and set axios headers if we do have a token
    
    const AuthJeton = (token) => {
      if (token) { // si token est présent
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // définit le token
        localStorage.setItem('token', token); // stocker le token
        console.log('Jeton valide')
      } else {
        delete api.defaults.headers.common['Authorization']; // supprimer le token dans les entetes axios
        localStorage.removeItem('token'); // supprimer le token dans local storage
        console.log('Jeton supprimé')
      }
    };
    
    export default AuthJeton;