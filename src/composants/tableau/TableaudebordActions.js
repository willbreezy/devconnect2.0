/**
 * Ce composant fournit des boutons d'actions pour que les utilisateurs puissent
 * naviguer vers différentes pages où ils peuvent éditer leur profil, ajouter 
 * de l'experience ou de l'éducation.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const TableaudebordActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Modifiez votre profil
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Ajoutez votre expérience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Ajoutez votre éducation
      </Link>
    </div>
  );
};

export default TableaudebordActions;