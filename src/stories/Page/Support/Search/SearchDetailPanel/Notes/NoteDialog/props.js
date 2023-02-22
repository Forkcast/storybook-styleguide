import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  hidden: PropTypes.bool,
  onSave: PropTypes.func.isRequired
};
  
const defaultProps = {
  classes: [],
  hidden: true,
  defaultType: "Status Note"
};
  
export {
    propTypes,
    defaultProps
}