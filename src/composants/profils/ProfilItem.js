/**
 *   est utilisé pour afficher un aperçu d'un profil utilisateur avec des informations essentielles telles que le nom, le statut,             *  l'entreprise, la localisation et les compétences. Il inclut également un lien vers la page complète du profil.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfilItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          Voir le profil
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfilItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfilItem;