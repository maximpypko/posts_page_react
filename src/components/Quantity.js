import PropTypes from 'prop-types';

function Quantity({ setAmountPosts, setCurrentPage, setPassword, activeQuantity }) {
  
  const newClassName = activeQuantity ? '' : 'uk-invisible';
  
  return (
    <select
      className={`${newClassName} uk-select uk-width-small uk-margin-left`}
      onChange={(e) => {
        setAmountPosts(e.target.value);
        setPassword('nextPage');
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
  setCurrentPage: PropTypes.func,
  setPassword: PropTypes.func,
  activeQuantity: PropTypes.bool
}

export default Quantity;