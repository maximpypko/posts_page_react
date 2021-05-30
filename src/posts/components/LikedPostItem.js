import PropTypes from 'prop-types';
import Context  from '../../Context';
import { useContext } from 'react';

function LikedPostItem({ post }) {
    
    const {
        likedPosts,
        setLikedPosts,
        // setIdElementDeleted
    } = useContext(Context);
    
    const hendlerClickButton = () => {
        const newLikedPosts = likedPosts.filter(el => el.id !== post.id);
        setLikedPosts(newLikedPosts);
        // setIdElementDeleted(post.id);
    }

    return (
        <tr>
            <td className="uk-width-medium uk-text-small">{post.title}</td>
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
  
LikedPostItem.propTypes = {
    post: PropTypes.object,
    likedPosts: PropTypes.array,
    setLikedPosts: PropTypes.func
}
  
export default LikedPostItem;