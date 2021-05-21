import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import PropTypes from 'prop-types';

function ListPosts({
  posts,
  view,
  setTimeRequest,
  likedPosts,
  setLikedPosts,
  idElementDeleted
}) {

  const [resultClasses, setResultClasses] = useState('uk-grid uk-child-width-1-2@s uk-child-width-1-2@m ');

  useEffect(() => {
    view ? setResultClasses('uk-grid uk-child-width-1-2@s uk-child-width-1-2@m ') : setResultClasses('uk-grid uk-child-width-1-2@s uk-child-width-1-3@m ');
  }, [view])
  
  return (
    <div className={resultClasses} >
      {
        posts.map(element => {
          return <ListItem
            key={element.id}
            element={element}
            setTimeRequest={setTimeRequest}
            likedPosts={likedPosts}
            setLikedPosts={setLikedPosts}
            idElementDeleted={idElementDeleted}
            view={view}
          />
        })
      }
    </div>    
  );
}

ListPosts.propTypes = {
  posts: PropTypes.array,
  view: PropTypes.bool
}

export default ListPosts;