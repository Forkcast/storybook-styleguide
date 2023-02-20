import PropTypes from 'prop-types';
import closeIcon from 'assets/close.svg';
const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  hidden: PropTypes.bool,
  children: PropTypes.any,
  closeIcon: PropTypes.string,
  onClose: PropTypes.func,
};
  
const defaultProps = {
  classes: [],
  hidden: false,
  title: '',
  children: '',
  closeIcon,
  onClose: () => false
};
  
export {
    propTypes,
    defaultProps
}