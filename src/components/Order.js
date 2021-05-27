import PropTypes from 'prop-types';
import  Context  from '../Context';
import { useContext } from 'react';

function Order() {
  
  const { setOrder } = useContext(Context);

  return (
    <select
      className={`uk-select uk-width-small uk-margin-auto-left`}
      onChange={(e) => {
        setOrder(e.target.value);
      }
      }>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  );
}

Order.propTypes = {
  setOrder: PropTypes.func
}

export default Order;