import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context  from '../Context';
import Nav from './Nav';
import ButtonBack from '../components/ButtonBack';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';

function Post() {

  const { selectedPost } = useContext(Context);
  const [comments, setComments] = useState([]);

  return (
    <>
      <Nav />
      <ButtonBack />
      <div className="uk-section">
        <div className="uk-container">
          <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{selectedPost.title}</span>
            <a className="uk-text-small" href="/">Author</a>
          </h1>
          <div className="uk-article uk-dropcap uk-margin-large-bottom">
          <p>{ selectedPost.body}</p>
        </div>
        <hr/>
        <h3 className="uk-margin-remove-top">Comments:</h3>
          <div className="uk-comments">
            {
              comments.map(comment => {
                return (
                  <Comment
                    key={comment.id}
                    comment={comment} />
                )
              })
            }
          </div>
          <CommentForm
            comments={comments}
            setComments={setComments}/>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  selectedPost: PropTypes.object
}

export default Post