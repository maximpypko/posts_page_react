import React from 'react';
import PropTypes from 'prop-types';
import PostItem from "../components/PostItem";
import WarningIfNoText from "../../common/components/WarningIfNoText";

function GridViewWithoutPictures({ posts }) {

  return (
    <div className="uk-container uk-cover-container">  
      <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-3@m'>
        {posts ? 
          posts.map(element => {

            return <PostItem
              key={element.id}
              element={element}
            />
          }) :
          <WarningIfNoText/>
          }
      </div>
    </div>
  );
}

GridViewWithoutPictures.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
}

export default GridViewWithoutPictures;