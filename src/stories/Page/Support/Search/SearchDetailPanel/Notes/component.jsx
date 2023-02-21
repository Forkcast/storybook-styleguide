import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect'
import ComponentStyle from './style';

import Header from 'Base/Header/component'
import Panel from 'Base/Panel/component'
import Table from 'Base/Table/component'
import Button from 'Base/Button/component'
import Loader from 'Base/Loader/component'
import NoteDialog from './NoteDialog/component'

import {
  propTypes,
  defaultProps
} from './props'

const Component = ({ classes, rows, loading, action }) => {
  const [hideDialog, setHideDialog] = useState(true)
  const [notes, setNotes] = useState(rows)

  useDeepCompareEffect(()=>setNotes(rows),[rows])
  return (
    <>
      <NoteDialog 
        hidden={hideDialog}
        onSave={(e, text, type, date) => {
          const note = {
            "key": "notes_row_added",
            "columns": [{
              "key":"note_added_text",
              "value": text,
            },{
              "key": "note_added_type",
              "value": type,
            },{
              "key": "note_added_user",
              "value": "Admin"
            },{
              "key": "note_added_date",
              "value": date
            }]
          }
          notes.push(note)
          setNotes(notes)
          setHideDialog(true)
          action(text, type, date)
        }}
        onClose={e=>setHideDialog(true)}
      />
      <ComponentStyle
        className={classes.join(' ')}
      >
        <Panel>
          <Loader loading={loading}>
            <div className={'note-headers'}>
              <Header>Notes</Header>
              <Button onClick={e => setHideDialog(false)}>Add Note</Button>
            </div>
            <Table 
              empty={'There are no notes associated with this user yet.'}
              headers={[{
                  "key":"Note",
                  "value": "Note"
                },{
                  "key":"Note type",
                  "value": "Note type"
                },
                {
                  "key":"Created by",
                  "value": "Created by"
                },
                {
                  "key":"Created at",
                  "value": "Created at"
                }
              ]}
              rows={notes}
            />
            </Loader>
        </Panel>
      </ComponentStyle>
    </>
  );
};

Component.propTypes = propTypes
Component.defaultProps = defaultProps
export default Component