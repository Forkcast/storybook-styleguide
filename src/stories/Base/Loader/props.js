import PropTypes from 'prop-types';
import loader from './assets/loader.svg'
const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  image: PropTypes.string
};
  
const defaultProps = {
  classes: [],
  image: loader,
};
  
export {
    propTypes,
    defaultProps
}