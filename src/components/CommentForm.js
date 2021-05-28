import { useRef } from 'react';

function CommentForm( {comments, setComments} ) {
  
  const formRef = useRef();
  
  const hendlerForm = () => {
   
    const [, author, email, body, ] = formRef.current;
    const newFormVallue = {
      id: Date.now(),
      author: author.value,
      email: email.value,
      body:body.value
    }
    setComments([newFormVallue, ...comments])
    formRef.current.reset()
  }
 
  return (
    <form
      ref={formRef}
      action="#"
      className="uk-comment-form uk-margin-medium-top"
    >
     <fieldset className="uk-fieldset">
        <legend className="uk-legend">Add Comment</legend>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            placeholder="Name"
            required         
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
          ></textarea>
        </div>
        <div className="uk-margin">
          <button
            className="uk-button uk-button-primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              hendlerForm()
            }
            }
          >Post Comment</button>
        </div>
      </fieldset>
    </form>       
  )
}
export default CommentForm;