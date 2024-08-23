/**
 * Ce composant permet de gérer l'état de l'authentification et des profils utilisateurs.
 * Il affiche le tableau de bord de l'utilisateur connecté, permet de gérer son profil, et 
 * ses informations d'expérience, d'éducation, et donne la possiblité de supprimer son compte. 
 */

import React, { useEffect } from 'react'; // permet de récupérer les données du profil au chargement
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // validation des props
import { connect } from 'react-redux';
import TableaudebordActions from './TableaudebordActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profil'; 

const PageTableaudebord = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="container">
      <h1 className="large text-primary">Tableau de bord</h1>
      <p className="lead">
        <i className="fas fa-user" />Immense bienvenue très cher(e) {user && user.name}
      </p>

      {/*Si le profil existe, le composant affiche les actions du tableau de bord, de l'experience et de l'éducation
       et un bouton de suppression de compte */}
      {profile !== null ? (
        <>
          <TableaudebordActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Supprimez votre compte
            </button>
          </div>
        </>
      ) : {/* Sinon il invite l'utilisateur à créer un profil avec un lien vers la page de création de profil */}
      (
        <>
          <p>Attendez, vous n'avez pas encore configuré de profil, ajoutez quelques informations...</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Créer votre profil
          </Link>
        </>
      )} 
    </section>
  );
};

PageTableaudebord.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  PageTableaudebord
);