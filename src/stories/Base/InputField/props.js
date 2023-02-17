import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};
  
const defaultProps = {
  classes: [],
  type: 'text',
  disabled: false,
  onChange: (e, setValue) => setValue(e.target.value),
};
  
export {
    propTypes,
    defaultProps
}