import { useContext } from 'react';
import { IdRequest } from '../../utils/enums';
import PropTypes from 'prop-types';
import  Context  from '../../Context';

const InputServicePanel = () => {
  
  const {
    formValue,
    timeRequest,
    setTimeRequest,
    setIdentifier
  } = useContext(Context);

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => { fn.apply(this, arguments) }
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms)
    };
  }

  function onChange(e) {
    e.preventDefault();
    setIdentifier(IdRequest.search);
    setTimeRequest(true);
  } 

  const hendlerChange = debounce(onChange, 1000);
  
  return (
    <form
      ref={formValue}
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon='true'></span>
        {!timeRequest || <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>}
      <input
        
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onChange={e => {
          hendlerChange(e)
        }}
      />
    </form>      
  );
}

InputServicePanel.propTypes = {
  setInputValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  setTimeRequest: PropTypes.func,
  setIdentifier: PropTypes.func
}

export default InputServicePanel;