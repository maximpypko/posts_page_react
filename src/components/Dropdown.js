import LikedPostItem from './LikedPostItem';
import PropTypes from 'prop-types';

function Dropdown({ likedPosts, setLikedPosts, setIdElementDeleted }) {

  return (
    <div
      className="uk-width-large"
      uk-dropdown='mode: click'>
      <div className="uk-dropdown-grid uk-child-width-1-1@m" uk-grid='true'>
        <div>
          <table className="uk-table uk-table-divider uk-table-justify">
            <thead>
              <tr>
                <th>Title</th>
                <th className="uk-text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                likedPosts.map((post) => {
                  return (
                    <LikedPostItem
                      key={post.id}
                      post={post}
                      likedPosts={likedPosts}
                      setLikedPosts={setLikedPosts}
                      setIdElementDeleted={setIdElementDeleted}/>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>    
  );
}

Dropdown.propTypes = {
  likedPosts: PropTypes.array,
}

export default Dropdown;