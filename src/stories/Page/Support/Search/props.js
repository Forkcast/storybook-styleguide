import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.array,
  details: PropTypes.object,
  resultsClasses: PropTypes.arrayOf(PropTypes.string),
  detailClasses: PropTypes.arrayOf(PropTypes.string),
};
  
const defaultProps = {
  classes: [],
  results: [],
  resultsClasses: [],
  detailClasses: [],
  searchActions: () => false,
  detailActions: {
    dataFetch: () => false,
    notes: () => false
  }
};
  
export {
    propTypes,
    defaultProps
}