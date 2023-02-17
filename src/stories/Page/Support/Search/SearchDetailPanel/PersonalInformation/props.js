import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
};
  
const defaultProps = {
  classes: [],
  phone: '',
  firstName: '',
  lastName: '',
  email: '',
  status: '',
  language: '',
  dateOfBirth: '',  
  locations: [],
  zip: '',
  eligibilities: [],
};
  
export {
    propTypes,
    defaultProps
}