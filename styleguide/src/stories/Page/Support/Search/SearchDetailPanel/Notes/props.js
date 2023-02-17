import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.array
};
  
const defaultProps = {
  classes: [],
  rows: []
};
  
export {
    propTypes,
    defaultProps
}