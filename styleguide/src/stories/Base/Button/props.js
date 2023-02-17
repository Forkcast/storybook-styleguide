import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
};
  
const defaultProps = {
  onClick: undefined,
  classes: [],
};
  
export {
    propTypes,
    defaultProps
}