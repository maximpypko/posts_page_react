import React from 'react';
import PropTypes from 'prop-types';
import PostItem from "../components/PostItem";
import WarningIfNoText from "../../common/components/WarningIfNoText";

function GridViewWithPictures({ posts }) {

  return (
    <div className="uk-container uk-cover-container">  
      <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-2@m ' >
      
        {
          posts ?
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

GridViewWithPictures.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ])
}

export default GridViewWithPictures;
