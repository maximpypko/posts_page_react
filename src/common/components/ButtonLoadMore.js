import PropTypes from 'prop-types';
import {IdRequest}  from '../../utils/enums';
import  Context  from '../../Context';
import { useContext } from 'react';

function ButtonLoadMore() {
  const {
    setCurrentPage,
    currentPage,
    hiddenElements,
    timeRequest,
    setTimeRequest,
    setRange,
    setIdentifier
  } = useContext(Context)
  
  return (
    <>
      {hiddenElements ||  <div className="uk-margin">
        <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setIdentifier(IdRequest.buttonLoadMore)
            setCurrentPage(currentPage + 1)
            setRange(true)
            setTimeRequest(true)
          }}
        >
          Load more
            {!timeRequest || <div className="uk-margin-small-left" uk-spinner="ratio: 0.6"></div>}
        </button>
      </div>}
    </>
  );
}

ButtonLoadMore.propTypes = {
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
  hiddenElements: PropTypes.bool,
  timeRequest: PropTypes.bool,
  setTimeRequest: PropTypes.func,
  setRange: PropTypes.func,
  setIdentifier: PropTypes.func,
}

export default ButtonLoadMore;