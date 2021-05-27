import LikedPostItem from './LikedPostItem';
import LikedAlbumItem from './LikedAlbumItem';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Context from '../Context';


function Dropdown() {

  const {
    likedPosts,
    likedAlbums
  } = useContext(Context);

  return (
    <div
      className="dropdown__container" 
      uk-dropdown='mode: click'>
      <div className="dropdown__item">
        <div>
          <table className="uk-table uk-table-divider uk-table-justify">
            <thead>
              <tr>
                <th>Posts title</th>
                <th className="uk-text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                likedPosts.map((post) => {
                  return (
                    <LikedPostItem
                      key={post.id}
                      post={post}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="dropdown__item">
        <div>
          <table className="uk-table uk-table-divider uk-table-justify">
            <thead>
              <tr>
                <th>Albums title</th>
                <th className="uk-text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                likedAlbums.map((album) => {
                  return (
                    <LikedAlbumItem
                      key={album.id}
                      album={album}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>   
  );
}

Dropdown.propTypes = {
  likedPosts: PropTypes.array,
}

export default Dropdown;