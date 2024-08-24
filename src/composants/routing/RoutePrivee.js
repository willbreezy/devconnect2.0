/**
 *   est un composant de routage utilisé pour protéger certaines routes afin 
 *    qu'elles ne soient accessibles qu'aux utilisateurs authentifiés.
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageChargement from '../miseenpage/PageChargement';

const RoutePrivee = ({
  component: Component,
  auth: { isAuthenticated, loading }
}) => {
  if (loading) return <PageChargement />;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/login" />;
};

RoutePrivee.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RoutePrivee);