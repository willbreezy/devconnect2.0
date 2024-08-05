/**
 *  Le composant CommentItem est conçu pour afficher un commentaire sur un post,
 * avec des fonctionnalités telles que l'affichage de l'auteur du commentaire,
 * la date de publication et la possibilité de supprimer le commentaire si l'utilisateur est l'auteur.
 * - Affiche l'avatar de l'auteur, son nom, le texte du commentaire et la date de publication.
 * - La date est formatée à l'aide de la fonction formatDate.
 * - Un bouton de suppression est visible uniquement si l'utilisateur connecté est l'auteur du commentaire.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';

const Affichercommentaire = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Publié à {formatDate(date)}</p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type="button"
          className="btn btn-danger"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div>
);

Affichercommentaire.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(Affichercommentaire);