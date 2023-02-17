import React from 'react';
import ComponentStyle from './style';
import Paragraph from 'Base/Paragraph/component'
import Rule from 'Base/Rule/component'
import Avatar from 'Composite/Avatar/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ onClick, className, menuItems, classes }) => {
  return (
    <ComponentStyle
      className={classes.join(' ')}
    >
      <Avatar classes={['profile']} />
      <Rule classes={['rule']} />
      {menuItems.map((section) =>
        <div 
          key={section.name}
          className={'section'}
        >
          <Paragraph classes={['bigger', 'heavy2']}>{section.name}</Paragraph>
          {section.items.map((item) => 
            <div 
              key={`${section.name}_${item.name}`} 
              onClick={(e) => onClick(e, item.path)}
              className={[className, 'section-item'].join(' ')}
            >
              <div>
                <img src={item.icon} alt={item.name} />
              </div>
              <div>
                <Paragraph classes={['big', 'heavy1']}>{item.name}</Paragraph>
              </div>
            </div>
          )}
        </div>
      )}
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component