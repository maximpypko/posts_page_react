import PropTypes from 'prop-types';
import  Context  from '../Context';
import { useContext } from 'react';
import { url }   from '../utils/enums';


function View() {
  
  const {
    activePage,
    view,
    setView
  } = useContext(Context);

  let defaultView, otherView;
  view ? defaultView = 'uk-active' : otherView = 'uk-active';

  const isActiveViewWithPictures = activePage === url.urlAlbums ? 'uk-invisible' : '';

  return (
    <div className={`uk-button-group uk-margin-left ${isActiveViewWithPictures}`}>
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