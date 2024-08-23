/**
 * Le composant Spinner est utilisé pour afficher une image de chargement
 * pendant que des données ou du contenu se chargent.
 */ 
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const PageChargement = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);

export default PageChargement;