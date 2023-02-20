import PropTypes from 'prop-types';
const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};
  
const defaultProps = {
  classes: [],
  disabled: false,
  defaultIndex: 0,
  onChange: (e, setValue) => setValue(e.target.value)
};
  
export {
    propTypes,
    defaultProps
}