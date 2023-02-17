import React from 'react';
import ComponentStyle from './style';
import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ headers, rows, classes }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <thead>
      <tr>
      {headers.map(header =>
        <th key={header.key}>{header.value}</th>
      )}
      </tr>
      </thead>
      <tbody>
      {rows.map(row => 
        <tr key={row.key}>
          {row.columns.map(column => 
            <td 
              key={column.key} 
              className={column.class ? column.class : ''}
              onClick={column.onClick ? column.onClick : () => false}
            >
              {column.value}
            </td>  
          )}
        </tr>
      )}
      </tbody>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component