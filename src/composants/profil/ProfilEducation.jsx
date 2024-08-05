/**
 * Ce composant affiche les détails d'une expérience éducative dans le profil d'un utilisateur.
 */
import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfilEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Maintenant'}
    </p>
    <p>
      <strong>Diplome: </strong> {degree}
    </p>
    <p>
      <strong>Domaine d'étude: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfilEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfilEducation;