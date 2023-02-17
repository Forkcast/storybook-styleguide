import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.object
};
  
const defaultProps = {
  classes: [],
  details: {
    user: {
      rows: [],
      locations: {}
    },
    notes: {
      rows: [],
    },
    events: {
      rows: [],
    },
    orders: {
      rows: [],
    },
    personal: {
      rows: [],
    },
    contacts: {
      rows: [],
    },
    rd: {
      rows: [],
    },
    feedback: {
      rows: [],
    },
    payments: {
      rows: [],
    },
    benefits: {
      rows: [],
    },
  },
  actions: {
    quickAccess: () => {},
    notes:  () => {}
  }
};
  
export {
    propTypes,
    defaultProps
}