import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  feedback: PropTypes.array,
};
  
const defaultProps = {
  classes: [],
  feedback: [],
};
  
export {
    propTypes,
    defaultProps
}