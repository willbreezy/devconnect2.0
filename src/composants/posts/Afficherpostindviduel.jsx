/**
 * Ce composant  permet d'afficher un post individuel avec des fonctionnalités
 * telles que l'ajout et la suppression de likes, la suppression du post (pour l'utilisateur qui l'a créé, je précise bien),
 * et la navigation vers la discussion du post.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

// Le composant affiche les détails du post tels que le texte, le nom de l'utilisateur, l'avatar, 
//et la date de création formatée avec la fonction formatDate.
const Afficherpostindividuel = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}> {/** Le nom et l'avatar sont des liens vers le profil de l'utilisateur */}
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Publié à {formatDate(date)}</p>

      <button
        onClick={() => addLike(_id)}
        type="button"
        className="btn btn-light"
      > 
      {/** Le bouton "thumbs up" permet d'ajouter un like au post. Le nombre de likes est affiché à côté de l'icône. */}
        <i className="fas fa-thumbs-up" />{' '}
        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
      </button>
      <button
        onClick={() => removeLike(_id)}
        type="button"
        className="btn btn-light"
      >
        {/** Le bouton "thumbs down" permet de retirer un like du post. */}
        <i className="fas fa-thumbs-down" />
      </button> 
      {/** Un lien vers la page de discussion du post, affichant le nombre de commentaires si disponible. */}
      <Link to={`/posts/${_id}`} className="btn btn-primary">
        Discussion{' '}
        {comments.length > 0 && (
          <span className="comment-count">{comments.length}</span>
        )}
      </Link>
      {/** Si l'utilisateur connecté est l'auteur du post, un bouton pour supprimer le post est affiché. */}
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div>
);

Afficherpostindividuel.propTypes = {
  post: PropTypes.object.isRequired, // contient les détails du post
  auth: PropTypes.object.isRequired, // contient les informations de l'utilisateur connecté
  addLike: PropTypes.func.isRequired, // ajouter un like
  removeLike: PropTypes.func.isRequired, // retirer un like
  deletePost: PropTypes.func.isRequired // supprimer un post
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  Afficherpostindividuel
);