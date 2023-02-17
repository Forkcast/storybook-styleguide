import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  level: PropTypes.number
};
  
const defaultProps = {
  classes: [],
  level: 1
};
  
export {
    propTypes,
    defaultProps
}