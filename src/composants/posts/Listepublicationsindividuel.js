 /**
 * Ce composant affiche une liste de posts, permet à l'utilisateur d'ajouter 
 * un nouveau post via un formulaire, et gère la récupération des posts depuis une source de données.
 */
 import React, { useEffect } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import Afficherpostindividuel from './Afficherpostindviduel'
 import Creerpublication from './Creerpublication';
 import { getPosts } from '../../actions/post';
 
 const Listepublicationsindividuel = ({ getPosts, post: { posts } }) => {
    // Cette fonction récupère les posts et met à jour l'état global de l'application avec les posts récupérés
   useEffect(() => {
     getPosts();
   }, [getPosts]);
 
   return (
     <section className="container">
       <h1 className="large text-primary">Publications</h1>
       <p className="lead">
         <i className="fas fa-user" /> Bienvenue dans la communité
       </p>
       {/** Le composant Creerpublication est inclus pour permettre aux utilisateurs de créer de nouveaux posts. */}
       <Creerpublication />
       <div className="posts">
         {posts.map((post) => ( // Les posts sont mappés et chaque post est rendu en utilisant le composant Afficherpostindividuel.
           <Afficherpostindividuel key={post._id} post={post} />
         ))}
       </div>
     </section>
   );
 };
 
 Listepublicationsindividuel.propTypes = {
   getPosts: PropTypes.func.isRequired,
   post: PropTypes.object.isRequired
 };
 
 const mapStateToProps = (state) => ({
   post: state.post
 });
 
 export default connect(mapStateToProps, { getPosts })(Listepublicationsindividuel);