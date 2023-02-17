import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};
  
const defaultProps = {
  classes: [],
  userId: '',
  firstName: '',
  lastName: '',
  eligibilities: [],
};
  
export {
    propTypes,
    defaultProps
}