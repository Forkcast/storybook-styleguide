import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string,
  offset: PropTypes.string,
};
  
const defaultProps = {
  classes: [],
  width: '100%',
  offset: '-25px'
};
  
export {
    propTypes,
    defaultProps
}