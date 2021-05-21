import PropTypes from 'prop-types';

function Form({
  setInputValue,
  timeRequest,
  setTimeRequest,
  setPassword,
  setActiveQuantity,
  setSwitchView
}) {

  const hendlerEvents = e => {
    e.preventDefault();
    setPassword('nextPage');
    setInputValue(e.target.value);
    setTimeRequest(true);
    e.target.value = '';
    setActiveQuantity(false);
    setSwitchView(false)
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
}

Form.propTypes = {
  setInputValue: PropTypes.func,
  timeRequest: PropTypes.bool,
  setTimeRequest: PropTypes.func,
  setPassword: PropTypes.func,
  setActiveQuantity: PropTypes.func,
  setSwitchView: PropTypes.func,
}

export default Form;