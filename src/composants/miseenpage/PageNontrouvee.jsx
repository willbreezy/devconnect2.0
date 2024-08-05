/**
 * Le composant NotFound est utilisé pour afficher une page d'erreur lorsque 
 * l'utilisateur essaie d'accéder à une page qui n'existe pas.
 */
import React from 'react';

// La fonction PageNontrouvee retourne un JSX qui rend une section avec un message d'erreur indiquant que la page demandée n'existe pas.
const PageNontrouvee = () => {
  return (
    <section className="container">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Oups...nous ne trouvons pas cette page!
      </h1>
      <p className="large"> Désolé pour vous mais, cette page n'existe pas!</p>
    </section>
  );
};

export default PageNontrouvee;