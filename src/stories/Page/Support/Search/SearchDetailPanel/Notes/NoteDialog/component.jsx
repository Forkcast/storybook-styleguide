import React, {useState} from 'react';
import ComponentStyle from './style';

import Button from 'Base/Button/component'
import InputField from 'Base/InputField/component'
import SelectField from 'Base/SelectField/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ 
  classes, 
  onSave,
  onClose,
  hidden,
  ...props 
}) => {

  const [noteText, setNoteText] = useState('')
  const [noteType, setNoteType] = useState('refund')
  return (
    <ComponentStyle
      className={classes.join(' ')}
      hidden={hidden}
      title={'Add Note'}
      onClose={onClose}
    >
      <InputField 
        type="text"
        name="note_text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      >
        Note
      </InputField>
      <SelectField 
        value={noteType}
        name="note_type"
        options={[{
          "name":"Refund type",
          "value": "Refund type",
        },{
          "name":"Other",
          "value": "other",
        }]}
        onChange={(e) => setNoteType(e.target.value)}
      >
        Note Type
      </SelectField>
      <div className="button-row">
        <Button 
          classes={['secondary']}
          onClick={
            e => { 
              const date = new Date().toLocaleDateString()
              onSave(e, noteText, noteType, date)
            }
          }
        >Save</Button>
      </div>
    </ComponentStyle>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component