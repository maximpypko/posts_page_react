import { useRef, useState } from 'react';

function CommentForm( {comments, setComments} ) {
  
  const formRef = useRef();
  const сlassName = {
    form: 'uk-invisible',
    email: 'uk-invisible'
  }
  const [warningClassName, setWarningClassName]= useState(сlassName)
  
  const hendlerForm = () => {
   
    const [, author, email, body,] = formRef.current;
    

    const resValidationEmail = validateEmail(email.value);

    if (!resValidationEmail) {
      setWarningClassName({ form: 'uk-invisible', email: '' })
      
    } else {
      if (author.value && body.value) {
        setWarningClassName({form:'uk-invisible', email: 'uk-invisible'})
          const newFormVallue = {
            id: Date.now(),
            author: author.value,
            email: email.value,
            body:body.value
          }
          setComments([newFormVallue, ...comments])
        formRef.current.reset()
        
      } else {
        setWarningClassName({form:'', email: 'uk-invisible'})
      }  
    }
  }

  function validateEmail(email) {
    const result = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return result.test(String(email).toLowerCase());
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
          <p className={`uk-text-danger ${warningClassName.email}`}> * Enter correct email</p>
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
          ></textarea>
        </div>
        <p className={`uk-text-danger ${warningClassName.form}`}> * To successfully create a comment, all fields must be filled</p>
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