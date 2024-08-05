/**
 * Ce composant affiche les détails d'une expérience professionnelle dans le profil d'un utilisateur.
 */
import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfilExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Maintenant'}
    </p>
    <p>
      <strong>Poste occupé: </strong> {title}
    </p>
    <p>
      <strong>Emplacement: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfilExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfilExperience;