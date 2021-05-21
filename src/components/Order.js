import PropTypes from 'prop-types';

function Order({ setOrder, setPassword, switchView }) {
  
  const newClassName = switchView ? '' : 'uk-invisible';

  return (
    <select
      className={`uk-select uk-width-small uk-margin-auto-left ${newClassName}`}
      onChange={(e) => {
        setPassword('nextPage')
        setOrder(e.target.value)
      }
      }>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  );
}

Order.propTypes = {
  setOrder: PropTypes.func,
  setPassword: PropTypes.func,
  switchView: PropTypes.bool
}

export default Order;