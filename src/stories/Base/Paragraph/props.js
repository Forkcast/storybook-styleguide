import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
};
  
const defaultProps = {
  classes: [],
  children: '',
};
  
export {
    propTypes,
    defaultProps
}