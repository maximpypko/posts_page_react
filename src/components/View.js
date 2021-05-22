import PropTypes from 'prop-types';

function View({ view, setView}) {
  
  let defaultView, otherView;
  view ? defaultView = 'uk-active' : otherView = 'uk-active';

  return (
    <div className='uk-button-group uk-margin-left'>
      <button
        className={`uk-button uk-button-default ${defaultView}`}
        onClick={() => setView(true)}>
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={`uk-button uk-button-default ${otherView}`}
        onClick={() => setView(false)}>
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  );
}

View.propTypes = {
  view: PropTypes.bool,
  setView: PropTypes.func
}

export default View;