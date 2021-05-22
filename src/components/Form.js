import {forwardRef} from 'react';
import PropTypes from 'prop-types';

const Form = forwardRef((props, ref) => {
  
  const {timeRequest,
    setTimeRequest,
    setPassword } = props;

  const hendlerEvents = e => {
    e.preventDefault();
    setPassword('search');
    setTimeRequest(true);
    e.target.blur()
  }

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
          onKeyDown={e => {
            if (e.key === 'Enter' && e.target.value.trim()) hendlerEvents(e)
          }}
          onBlur={e => {
            if (e.target.value.trim()) hendlerEvents(e)
        }}
      />
    </form>      
  );
})

Form.propTypes = {
  setInputValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  setTimeRequest: PropTypes.func,
  setPassword: PropTypes.func
}

export default Form;