import PropTypes from 'prop-types';
import  Context  from '../Context';
import { useContext } from 'react';

function Quantity() {
  
  const {
    setAmountPosts,
    setCurrentPage
  } = useContext(Context);

  return (
    <select
      className=' uk-select uk-width-small uk-margin-left'
      onChange={(e) => {
        setAmountPosts(e.target.value);
        setCurrentPage(1);
      }}>
      <option value="6">6</option>
      <option value="12">12</option>
      <option value="24">24</option>
    </select> 
  );
}

Quantity.propTypes = {
  setAmountPosts: PropTypes.func,
  setCurrentPage: PropTypes.func
}

export default Quantity;