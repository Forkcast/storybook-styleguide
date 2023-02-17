import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        })
      )
    })
  )
};
  
const defaultProps = {
  classes: [],
  rows: []
};
  
export {
    propTypes,
    defaultProps
}