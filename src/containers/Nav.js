import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ButtonLike from '../components/ButtonLike';
import { IdRequest, url } from '../utils/enums';
import { useContext } from 'react';
import Context  from '../Context';

function Nav() {
  
  const {
    setCurrentPage,
    linkPost,
    setLinkPosts,
    setIdentifier,
    likedPosts,
    setLikedPosts,
    setIdElementDeleted,
    activePage,
    setActivePage
  } = useContext(Context)

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar='true'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={activePage === url.urlPosts ? 'uk-active' : ''}>
            <Link to='/'
              onClick={() => {
                setIdentifier(IdRequest.normal);
                setLinkPosts(!linkPost);
                setCurrentPage(1);
                setActivePage(url.urlPosts)
              }}>Posts
            </Link>
          </li>
          <li className = {activePage === url.urlAlbums ? 'uk-active' : ''}>
            <Link to="/albums"
              onClick={() => {
                setActivePage(url.urlAlbums)
              }}>
              Albums
            </Link>
          </li>
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
  setIdentifier: PropTypes.func,
  likedPosts: PropTypes.array,
  setLikedPosts: PropTypes.func,
  setIdElementDeleted: PropTypes.func,
  activePage: PropTypes.string,
  setActivePage: PropTypes.func
}

export default withRouter(Nav);