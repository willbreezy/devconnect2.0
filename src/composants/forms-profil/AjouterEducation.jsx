/**
 * Ce composant AjouterEducation permet à l'utilisateur d'ajouter des informations sur son éducation.
 * Il utilise un formulaire contrôlé pour gérer les entrées utilisateur et une action Redux pour soumettre les données.
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AjouterEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ // Utilisation du hook useState pour gérer les entrées du formulaire
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  }); // Les champs du formulaire incluent l'école, le diplôme, le domaine d'étude, les dates, et une description.

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

    // mise à jour locale
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h1 className="large text-primary">Ajouter votre éducation</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Ajoutez n'importe quelle école ou Bootcamp
        que vous avez fréquenté
      </p>
      <small>* = ce champ est obligatoire</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Ecole ou bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Diplome ou certification"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Domaine d'étude"
            name="fieldofstudy"
            value={fieldofstudy}
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
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Ecole actuelle
          </p>
        </div>
        <div className="form-group">
          <h4>Jusqu'à la date</h4>
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
            placeholder="Décrivez votre programme"
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

AjouterEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AjouterEducation);