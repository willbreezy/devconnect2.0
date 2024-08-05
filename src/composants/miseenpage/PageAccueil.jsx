/**
 * Ce composant c'est la page d'accueil, il propose deux options à l'utilisateur:
 * se connecter ou s'inscrire. Si l'utilisateur est déjà authentifié, il est redirigé vers le tableau de bord.
 */
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// accepte la prop isAuthenticated pour vérifier si l'utilisateur est authentifié
//si utilisateur est authentifié
// redirige vers le tableau de bord
// sinon affiche la page d'accueil avec les options pour s'inscrire ou se connecter
const PageAccueil = ({ isAuthenticated }) => {
  if (isAuthenticated) { 
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DevConnect</h1>
          <p className="lead">
            Créer votre profil/portfolio de développeur, partager vos publications et obtener de l'aide
            d'autres développeurs. Créez vous un réseau puissant parmi des professionnels de plusieurs domaines 
            partout dans le monde. 
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              S'inscrire
            </Link>
            <Link to="/login" className="btn btn-light">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

//définit le type de la prop isAuthenticated comme booléen
PageAccueil.propTypes = {
  isAuthenticated: PropTypes.bool
};

// Extrait l'état isAuthenticated du store Redux et le passe en tant que prop au composant PageAccueil.
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

// Utilise connect pour connecter le composant au store Redux et lui fournir l'état isAuthenticated.
export default connect(mapStateToProps)(PageAccueil);