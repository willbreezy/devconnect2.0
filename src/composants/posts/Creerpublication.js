/**
 * Ce composant permet aux utilisateurs de créer un nouveau post.
 * Il utilise useState pour gérer l'état du texte du post et se connecte à Redux 
 * pour ajouter le post en utilisant l'action addPost.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

// useState est utilisé pour gérer l'état local du texte du post. La variable text contient le contenu du post, 
//et setText est utilisée pour mettre à jour cette variable.
const Creerpublication = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Dites quelque chose...</h3>
      </div>
      {/** Lorsque le formulaire est soumis, la fonction addPost est appelée avec l'objet { text } contenant le contenu du post, */}
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText(''); // puis setText est appelé avec une chaîne vide pour réinitialiser le champ de texte. 
        }}
      >
        {/** Le formulaire contient un textarea pour que l'utilisateur puisse écrire son post et un bouton de soumission. */}
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Créer une publication'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Envoyer' />
      </form>
    </div>
  );
};

Creerpublication.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(Creerpublication);