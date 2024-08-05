/**
 * Ce composant AjouterExperience permet aux utilisateurs
 *  d'ajouter leurs expériences professionnelles passées.
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AjouterExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h1 className="large text-primary">Ajouter une expérience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Ajoutez tous les postes de développeur/programmation
        que vous avez eu dans le passé
      </p>
      <small>* = ce champ est obligatoire</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Intitulé du poste"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Société"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Emplacement"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>A partir de la date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Emploi actuel
          </p>
        </div>
        <div className="form-group">
          <h4>A ce jour</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Description du poste"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Retour
        </Link>
      </form>
    </section>
  );
};

AjouterExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AjouterExperience);