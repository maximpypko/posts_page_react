import PropTypes from 'prop-types';

function View({ view, setView, switchView }) {
  
  let defaultView, otherView;
  view ? defaultView = 'uk-active' : otherView = 'uk-active';
  const newClassName = switchView ? '' : 'uk-invisible';

  return (
    <div className={`uk-button-group uk-margin-left ${newClassName}`}>
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
  setView: PropTypes.func,
  switchView:PropTypes.bool
}

export default View;