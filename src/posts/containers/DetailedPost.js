import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context  from '../../Context';
import Header from '../../common/containers/Header';
import ButtonBack from '../../common/components/ButtonBack';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import WarningIfNoComment from '../../common/components/WarningIfNoComment';

function DetailedPost() {

  const { selectedPost } = useContext(Context);
  const [comments, setComments] = useState([]);
  
  return (
    <>
      <Header />
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
              comments.length > 0 ? 
              comments.map(comment => {
                return (
                  <Comment
                    key={comment.id}
                    comment={comment} />
                )
              }) :
              <WarningIfNoComment/>
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

DetailedPost.propTypes = {
  selectedPost: PropTypes.object
}

export default DetailedPost;