import PropTypes from 'prop-types';
import imageAsset from 'assets/avatar.svg';

const propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  name: PropTypes.string,
};
  
const defaultProps = {
  onClick: undefined,
  classes: [],
  image: imageAsset,
  name: '',
};
  
export {
    propTypes,
    defaultProps
}