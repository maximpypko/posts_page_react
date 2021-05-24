import React from 'react';
import PropTypes from 'prop-types';
import ButtonLike from '../components/ButtonLike';
import { IdRequest } from '../utils/enums';

function Nav({
  setCurrentPage,
  linkPost,
  setLinkPosts,
  setPassword,
  likedPosts,
  setLikedPosts,
  setIdElementDeleted
}) {

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar='true'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="/"
              onClick={(e) => {
                e.preventDefault();
                setPassword(IdRequest.normal);
                setLinkPosts(!linkPost);
                setCurrentPage(1);
            }}>Posts</a>
          </li>
          {/* <li>
            <a href="posts-grid.html">Albums</a>
          </li> */}
        </ul>
      </div>
      <ButtonLike
        likedPosts={likedPosts}
        setLikedPosts={setLikedPosts}
        setIdElementDeleted={setIdElementDeleted}
        />
    </nav>
  );
}

Nav.propTypes = {
  setCurrentPage: PropTypes.func,
  linkPost:PropTypes.bool,
  setLinkPosts:PropTypes.func,
  setPassword: PropTypes.func
}

export default Nav;