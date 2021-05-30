import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useContext } from 'react';
import Context  from '../../Context';
import ButtonLike from './ButtonLike';
import { IdRequest, url } from '../../utils/enums';

function Header() {
  
  const {
    setCurrentPage,
    linkPost,
    setLinkPosts,
    setIdentifier,
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
      <ButtonLike/>
    </nav>
  );
}

Header.propTypes = {
  setCurrentPage: PropTypes.func,
  linkPost:PropTypes.bool,
  setLinkPosts:PropTypes.func,
  setIdentifier: PropTypes.func,
  activePage: PropTypes.string,
  setActivePage: PropTypes.func
}

export default withRouter(Header);