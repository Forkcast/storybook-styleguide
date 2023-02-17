import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};
  
const defaultProps = {
  classes: [],
  primary: '',
  locations: []
};
  
export {
    propTypes,
    defaultProps
}