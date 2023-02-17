import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};
  
const defaultProps = {
  classes: [],
  orderTotalCount: 0,
  orders: [],
  currentCount: 0,
  upcomingCount: 0,
  pastCount: 0,

};
  
export {
    propTypes,
    defaultProps
}