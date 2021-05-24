import ListItem from "../components/ListItem";
import Warning from "../components/Warning";

function GridViewWithoutPictures({
    posts,
    view,
    setTimeRequest,
    likedPosts,
    setLikedPosts,
    idElementDeleted
}) {
    return (
        <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-3@m ' >
          {posts ? 
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
            }) :
           <Warning/>
          }
        </div>    
      );
}

export default GridViewWithoutPictures;