import PropTypes from 'prop-types';

function LikedPostItem({ post, likedPosts, setLikedPosts, setIdElementDeleted }) {
    
    const hendlerClickButton = () => {
        const newLikedPosts = likedPosts.filter(el => el.id !== post.id)
        setLikedPosts(newLikedPosts)
        setIdElementDeleted(post.id)
    }

    return (
        <tr>
            <td className="uk-width-medium uk-text-small">{post.title}</td>
            <td className="uk-text-right">
                <button
                    className="uk-button"
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
    setLikedPosts: PropTypes.func,
    setIdElementDeleted: PropTypes.func
}
  
export default LikedPostItem;