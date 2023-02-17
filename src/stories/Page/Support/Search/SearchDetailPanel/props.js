import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.object
};
  
const defaultProps = {
  classes: [],
  details: {
    user: {
      locations: {}
    },
    notes: {},
    events: {},
    orders: {},
    personal: {},
    contacts: {},
    rd: {},
    feedback: {},
    payments: {},
    benefits: {},
    actions: {
      quickAccess: {}
    }
  }
};
  
export {
    propTypes,
    defaultProps
}