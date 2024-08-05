/**
 *   est conçu pour afficher une liste de profils de développeurs. Il utilise le hook useEffect pour récupérer les profils lors du chargement  * du composant et affiche une liste de ces profils ou un message indiquant qu'aucun profil n'a été trouvé.
 */
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageChargement from '../miseenpage/PageChargement';
import ProfilItem from './ProfilItem';
import { getProfiles } from '../../actions/profil';

const ListeProfils = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className="container">
      {loading ? (
        <PageChargement />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Développeurs</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Parcourez et connectez vous 
            avec les développeurs
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfilItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>Aucun profil trouvé</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

ListeProfils.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(ListeProfils);