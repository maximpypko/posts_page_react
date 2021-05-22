import PropTypes from 'prop-types';

function Quantity({
  setAmountPosts,
  setCurrentPage
}) {
  
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