import Dropdown from "./Dropdown";
import PropTypes from 'prop-types';

function ButtonLike ({likedPosts, setLikedPosts, setIdElementDeleted}) {

    return (
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button z"
            type="button"
            uk-icon="icon: heart; ratio: 2"
          ></button>
          <Dropdown
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
            setIdElementDeleted={setIdElementDeleted}/>
        </div>
      </div>
    );
}

ButtonLike.propTypes = {
  likedPosts:PropTypes.array,
  setLikedPosts:PropTypes.func,
  setIdElementDeleted:PropTypes.func,
}

export default ButtonLike;