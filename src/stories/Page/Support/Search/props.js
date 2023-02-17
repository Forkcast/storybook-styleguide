import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.array,
  details: PropTypes.object,
};
  
const defaultProps = {
  classes: [],
  results: [],
};
  
export {
    propTypes,
    defaultProps
}