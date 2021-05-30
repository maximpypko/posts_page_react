import PropTypes from 'prop-types';
import  Context  from '../../Context';
import { useContext } from 'react';
import { url }   from '../../utils/enums';

function PageViewSwitch() {
  
  const {
    activePage,
    isViewWithPictures,
    setIsViewWithPictures
  } = useContext(Context);

  let defaultView, otherView;
  isViewWithPictures ? defaultView = 'uk-active' : otherView = 'uk-active';

  const isActiveViewWithPictures = activePage === url.urlAlbums ? 'uk-invisible' : '';

  return (
    <div className={`uk-button-group uk-margin-left ${isActiveViewWithPictures}`}>
      <button
        className={`uk-button uk-button-default ${defaultView}`}
        onClick={() => setIsViewWithPictures(true)}>
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={`uk-button uk-button-default ${otherView}`}
        onClick={() => setIsViewWithPictures(false)}>
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  );
}

PageViewSwitch.propTypes = {
  activePage: PropTypes.string,
  isViewWithPictures: PropTypes.bool,
  setIsViewWithPictures: PropTypes.func
}

export default PageViewSwitch;