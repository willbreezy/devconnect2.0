/**
 * Le composant Barredenavigation est une barre de navigation qui change en fonction de l'état d'authentification de l'utilisateur.
 * Si l'utilisateur est authentifié, des liens supplémentaires pour accéder aux développeurs, aux posts, au tableau de bord
 * et se déconnecter *sont affichés. Sinon, des liens pour s'inscrire et se connecter sont affichés.
 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authentifier-utilisateur';

// Accepte les props auth (qui contient isAuthenticated) et logout; et définit deux liens:
const Barredenavigation = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = ( // liensaffichés lorsque l'utilisateur est authentifié
    <ul>
      <li>
        <Link to="/profiles">Espace développeurs</Link>
      </li>
      <li>
        <Link to="/posts">Publications</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Tableau de Bord</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Se déconnecter</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = ( // liens affichés lorsque l'utilisateur n'est pas authentifié
    <ul>
      <li>
        <Link to="/profiles">Espace développeurs</Link>
      </li>
      <li>
        <Link to="/register">S'inscrire</Link>
      </li>
      <li>
        <Link to="/login">Se connecter</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnect
        </Link>
      </h1>
      
      {/*Utilise un Fragment pour afficher soit authLinks soit guestLinks en fonction de l'état d'authentification.*/}
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Barredenavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

//Extrait l'état auth du store Redux et le passe en tant que prop au composant Barredenavigation.
const mapStateToProps = (state) => ({
  auth: state.auth
});

// Utilise connect pour connecter le composant au store Redux et lui fournir l'action logout.
export default connect(mapStateToProps, { logout })(Barredenavigation);