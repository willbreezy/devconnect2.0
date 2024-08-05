/**
 * Ce composant d'inscription d'utilisateur permet de gérer l'état de l'authentification et les alertes.
 * Il permet à un utilisateur de créer un compte en soumettant un formulaire avec son nom et prénom, 
 * son adresse email et son mot de passe. Si les mots de passe ne corrspondent pas, une alerte est affichée. 
 * Si l'utilisateur est authentifié, il est redirigé vers le tableau de bord. 
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alertes';
import { register } from '../../actions/authentifier-utilisateur';
import PropTypes from 'prop-types';

const PageInscription = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ici, onSubmit va aussi s'assurer que les mots de passe correspondent
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Oulah, vos mots de passe ne correspondent pas', 'réessayez encore');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Inscrivez-vous</h1>
      <p className="lead">
        <i className="fas fa-user" /> Créez votre compte
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Saisissez votre nom et votre prénom"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Ainsi que votre adresse email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            Ce site est magnifique, n'est-ce pas, et si vous insériez votre plus belle 
            photo !?
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Et votre mot de passe je vous prie"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirmez votre mot de passe ici"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="S'inscrire" />
      </form>
      <p className="my-1">
        Avez-vous déjà un compte DevConnect? <Link to="/login">Super, connectez-vous ici</Link>
      </p>
    </section>
  );
};

PageInscription.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(PageInscription);