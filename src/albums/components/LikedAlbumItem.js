import PropTypes from 'prop-types';
import Context  from '../../Context';
import { useContext } from 'react';

function LikedAlbumItem({ album }) {
    
    const {
        likedAlbums,
        setLikedAlbums
    } = useContext(Context);
    
    const hendlerClickButton = () => {
        const newLikedAlbums = likedAlbums.filter(el => el.id !== album.id)
        setLikedAlbums(newLikedAlbums)
    }

    return (
        <tr>
            <td className="uk-width-medium uk-text-small">{album.title}</td>
            <td className="uk-text-right">
                <button
                    className="uk-button uk-button--close"
                    type="button"
                    uk-icon="icon: close;"
                    onClick={() => {
                        hendlerClickButton()
                    }}
                ></button>
            </td>
      </tr>
    );
}
  
LikedAlbumItem.propTypes = {
    likedAlbums: PropTypes.array,
    setLikedAlbums: PropTypes.func
}

export default LikedAlbumItem;