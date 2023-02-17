import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  userId: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  eligibilities: PropTypes.array,
  buttonClick: PropTypes.func.isRequired
};
  
const defaultProps = {
  classes: [],
  loading: false,
  firstName: '',
  lastName: '',
  eligibilities: []
};
  
export {
    propTypes,
    defaultProps
}