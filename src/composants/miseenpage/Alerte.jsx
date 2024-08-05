import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alerte = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert) => ( // la méthode map crée un div pour chaque alerte avec un id unique et une classe css 
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </div>
);

Alerte.propTypes = { // définit que alerts doit etre un tableau 
  alerts: PropTypes.array.isRequired 
};

const mapStateToProps = (state) => ({ // extrait les alertes de l'état redux et les passe en tant que prop au composant Alerte
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerte);