/**
 *  Le composant Laissercommentaire permet aux utilisateurs de laisser un commentaire sur un post spécifique.
 *  Il utilise le state local pour gérer le texte du commentaire et envoie ce texte à 
 * l'action addComment lors de la soumission du formulaire.
 */   

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post'; 
import { setAlert } from '../../actions/alertes';

const Laissercommentaire = ({ postId, addComment }) => {
    // Utilise le hook useState pour gérer le texte du commentaire. Initialement, le texte est une chaîne vide.
  const [text, setText] = useState(''); 

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Laisser un commentaire</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {  
          e.preventDefault();// empêche le comportement par défaut du formulaire avec e.preventDefault(), appelle l'action
          if (text.trim() === '') {
            setAlert('oulaaah ton commentaire ne peut pas etre vide', 'invalide', 2000)
          } else {
          addComment(postId, { text }); // addComment avec postId et le texte du commentaire, 
          setText(''); // puis réinitialise le texte du commentaire à une chaîne vide.
        }
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Commenter'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Envoyer' />
      </form>
    </div>
  );
};

Laissercommentaire.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(Laissercommentaire);