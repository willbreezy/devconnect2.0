/**
 *  Le composant Post est conçu pour afficher un post spécifique ainsi que ses commentaires.
 * Il utilise React Router pour obtenir l'ID du post depuis l'URL, Redux pour récupérer les données du post,
 * et affiche le formulaire pour ajouter des commentaires, ainsi que la liste des commentaires associés.
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PageChargement from '../miseenpage/PageChargement';
import PostItem from '../posts/PostItem';
import Laissercommentaire from './Laissercommentaire';
import Affichercommentaire from './Affichercommentaire';
import { getPost } from '../../actions/post';

const Afficherpublication = ({ getPost, post: { post, loading } }) => {
    // Utilise useEffect pour appeler getPost avec l'ID du post lorsqu'il est monté ou lorsque l'ID change.
  const { id } = useParams();
  useEffect(() => {
    getPost(id); 
  }, [getPost, id]);

  return loading || post === null ? (
    <PageChargement />
  ) : (
    <section className="container">
      <Link to="/posts" className="btn">
        Retour aux publications
      </Link>
      {/*Affiche le post en utilisant le composant PostItem*/}
      <PostItem post={post} showActions={false} />
      {/**Affiche le composant Laissercommentaire pour ajouter un nouveau commentaire au post. */}
      <Laissercommentaire postId={post._id} />
      <div className="comments">
        {/**Affiche les commentaires associés au post en utilisant le composant Affichercommentaire. */}
        {post.comments.map((comment) => (
          <Affichercommentaire key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  );
};

Afficherpublication.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Afficherpublication);