/**
 * Ce composant React utilise Redux pour gérer l'état d'authentification.
 * Il permet à un utilisateur de se connecter en soumettant  un formulaire avec son adresse mail et 
 * son mot de passe. Dans la mesure où l'utilisateur est authentifié il est redirigé vers le tableau de bord. 
 */

import React, { useState } from 'react'; // useState pour gérer l'état local du formulaire
import { Link, Navigate } from 'react-router-dom'; // pour gérer la navigation
import { connect } from 'react-redux'; // pour connecter le composant à Redux
import PropTypes from 'prop-types'; // pour valider les props
import { login } from '../../actions/authentifier-utilisateur'; // pour l'action de connexion

const Connexion = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ // formData est l'état local qui contient email et password
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // onChange met à jour l'état local formData lorsque l'utilisateur entre des valeurs dans les champs du formulaire
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit empeche le comportement par defaut du formulaire et on appelle l'action 'login' avec les valeurs 'email' et 'password'
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // si l'utilisateur est identifié, il est redirigé vers le tableau de bord /dashboard à l'aide  de 'Navigate'
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Se connecter</h1>
      <p className="lead">
        <i className="fas fa-user" /> Connectez-vous à votre compte DevConnect
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Salut, votre adresse email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Et votre mot de passe"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Se connecter" />
      </form>
      <p className="my-1">
        Vous n'avez pas de compte? <Link to="/register">C'est simple, inscrivez-vous!</Link>
      </p>
    </section>
  );
};

Connexion.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Connexion);