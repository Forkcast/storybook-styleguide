import PropTypes from 'prop-types';
import square from 'assets/square.svg'

const propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.arrayOf(PropTypes.string),
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "items": PropTypes.arrayOf(PropTypes.shape({
      "name": PropTypes.string.isRequired,
      "path": PropTypes.string.isRequired,
      "icon": PropTypes.string,
    }).isRequired).isRequired
  }).isRequired).isRequired
};
  
const defaultProps = {
  onClick: undefined,
  classes: [],
  menuItems: [{
    'name': 'Dashboards',
    'items': [{
      'name': 'Metrics',
      'icon': square,
      'path': '/metrics',
    },{
      'name': 'Users',
      'icon': square,
      'path': '/users',
    },{
      'name': 'Statuses',
      'icon': square,
      'path': '/statuses',
    }]
  },{
    'name': 'Modules',
    'items': [{
      'name': 'Acquisition',
      'icon': square,
      'path': '/acquisition',
    },{
      'name': 'Eligibility',
      'icon': square,
      'path': '/eligibility',
    },{
      'name': 'Support',
      'icon': square,
      'path': '/support',
    }]
  }]
};
  
export {
    propTypes,
    defaultProps
}