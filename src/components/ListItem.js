import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context  from '../Context';

function ListItem({element}) {

  const {
    setSelectedPost,
    setTimeRequest,
    likedPosts,
    setLikedPosts,
    view
  } = useContext(Context)

  const { id, body, title } = element;
  const onLoad = useRef();
  const[classButtonHeart, setClassButtonHeart] = useState('')

  const activeLineClass = view ? '' : 'uk-heading-divider';

  const hendlerClickButtonHeart = () => {
 
    setLikedPosts([...likedPosts, element])
    setLikedPosts(() => {
      const flag = likedPosts.find(post => post.id === id);
      if (flag) {
        const newLikedPosts = likedPosts.filter(post => post.id !== id);
        return newLikedPosts
      }else {
        return  [element, ...likedPosts]
      }
    })
  }

  useEffect(() => {
    setClassButtonHeart(() => likedPosts.find(post => post.id === id) ? 'uk-text-success' : ''
    )
  }, [id, likedPosts])

  useEffect(() => {
    if(onLoad.current) setTimeRequest(false)
  }, [setTimeRequest])

  return (
    <div >
      <div
        ref={onLoad}
        className="grid uk-card uk-child-width-expand uk-card-default uk-margin-medium-bottom  uk-grid-collapse uk-margin uk-grid">
        {!view || <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            uk-cover='true'
            className="uk-cover"
          />
          <canvas width="600" height="400"></canvas>
        </div>}
        <div>
          <div className="uk-card-body">
            <h3 className={`uk-flex-row-reverse uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between uk-height-small uk-text-break ${activeLineClass}`}>
              <button
                className={`uk-width-3-4 uk-icon-link ${classButtonHeart}`}
                uk-icon="heart"
                onClick={() => {
                  hendlerClickButtonHeart()
                }}
                ></button>
              {title}
            </h3>
            <p
              className={`uk-text-truncate ${activeLineClass}`} >
              {body}
            </p>
            <Link 
              to={`post/${id}`}
              className="uk-button uk-button-text"
              onClick={() => {
              setSelectedPost(element)
              }}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  element: PropTypes.object,
  setTimeRequest: PropTypes.func,
  likedPosts: PropTypes.array,
  setLikedPosts: PropTypes.func,
  idElementDeleted: PropTypes.number,
  view: PropTypes.bool
}

export default withRouter(ListItem);