/**
 *  Ce composant permet aux utilisateurs de créer ou de modifier leur profil sur DevConnect
 */
import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profil';

// Déclarer initialState en dehors du composant pour éviter de déclencher un useEffect
const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const Formprofil = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // s'il n'y a pas de profil, essayez d'en récupérer un
    if (!profile) getCurrentProfile();

    // si nous avons terminé le chargement et que nous avons un profil
    // ensuite, construisez votre profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // les compétences peuvent etre un tableau de notre réponse API
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      // définit l'état local avec le profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    const editing = profile ? true : false;
    e.preventDefault();
    createProfile(formData, editing).then(() => {
      if (!editing) navigate('/dashboard');
    });
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        {creatingProfile ? 'Créer votre profil' : 'Modifier votre profil'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Accrenons quelques informations pour faire votre`
          : ' Ajoutez quelques modifications à votre profil'}
      </p>
      <small>* = champ obligatoire</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Sélectionner votre statut professionnel</option>
            <option value="Developer">Développeur</option>
            <option value="Junior Developer">Développeur Junior</option>
            <option value="Senior Developer">Développeur Sénior</option>
            <option value="Manager">Directeur</option>
            <option value="Student or Learning">Etudiant ou apprenant</option>
            <option value="Instructor">Instructeur ou enseignant</option>
            <option value="Intern">Stagiaire</option>
            <option value="Other">Autre</option>
          </select>
          <small className="form-text">
            Donnez-nous une idée de l'endroit où vous en etes dans votre carrière
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Société"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Pourrait etre votre propre entreprise ou celle pour laquelle vous travaillez
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Site web"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Pourrait etre votre propre site web ou un site web d'entreprise
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Emplacement"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            Ville & Etats suggérés (eg. Douala, CM)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Compétences"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Veuillez utiliser des valeurs séparées par des virgules (eg. HTML,CSS,JavaScript, Java, C#)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nom d'utilisateur GitHub"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            Si vous voulez vos derniers dépots et votre lien Github, incluez votre nom d'utilisateur
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Une petite bio de vous-meme"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Parlez-nous un peu de vous</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Ajoutez des liens vers les réseaux sociaux
          </button>
          <span>Facultatif</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Retour
        </Link>
      </form>
    </section>
  );
};

Formprofil.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  Formprofil
);