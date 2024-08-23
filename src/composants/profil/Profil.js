/**
 * Ce composant affiche les détails du profil d'un utilisateur spécifique en se basant sur son identifiant (ID).
 */
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PageChargement from '../miseenpage/PageChargement'
import ProfilTop from './ProfilTop';
import ProfilApropos from './ProfilApropos';
import ProfilExperience from './ProfilExperience';
import ProfilEducation from './ProfilEducation';
import ProfilGithub from './ProfilGithub';
import { getProfileById } from '../../actions/profil'

const Profil = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <section className="container">
      {profile === null ? (
        <PageChargement />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Retour aux profils
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Modifier votre profil
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfilTop profile={profile} />
            <ProfilApropos profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Expérience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfilExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>Aucune expérience</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfilEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>Aucune éducation</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfilGithub username={profile.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profil.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profil);