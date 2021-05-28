function Comment({comment}) {
  const { author, email, body } = comment;

  return (
    <article className="uk-comment">
      <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
        <div className="uk-width-expand">
          <h4 className="uk-comment-title uk-margin-remove">
            <a className="uk-link-reset" href="/">{author}</a>
          </h4>
          <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li><a href="/">{email}</a></li>
          </ul>
        </div>
      </header>
      <div className="uk-comment-body">
        <p>{body}</p>
      </div>        
    </article>
  )
}
export default Comment;