import ListItem from "../components/ListItem";
import Warning from "../components/Warning";

function GridViewWithPictures({ posts }) {
  
  return (
    <div className="uk-section">
      <div className="uk-container uk-cover-container">  
        <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-2@m ' >
        
          {posts ? 
            posts.map(element => {
              return <ListItem
                key={element.id}
                element={element}
              />
            }) :
           <Warning/>
          }
        </div>
      </div>
    </div> 
  );
}
export default GridViewWithPictures;
