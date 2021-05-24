import { forwardRef } from 'react';
import { IdRequest } from '../utils/enums';
import PropTypes from 'prop-types';

const Form = forwardRef((props, ref) => {
  
  const {timeRequest,
    setTimeRequest,
    setIdentifier } = props;

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
    e.target.blur()
  } 

  const hendlerChange = debounce(onChange, 1000)
  
  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon='true'></span>
        {!timeRequest || <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>}
      <input
        ref={ref}
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onChange={e => {
          hendlerChange(e)
        }}
      />
    </form>      
  );
})

Form.propTypes = {
  setInputValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  setTimeRequest: PropTypes.func,
  setIdentifier: PropTypes.func
}

export default Form;