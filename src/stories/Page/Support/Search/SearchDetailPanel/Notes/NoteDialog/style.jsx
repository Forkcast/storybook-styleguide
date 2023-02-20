import styled from 'styled-components'
import Dialog from 'Composite/Dialog/component'
export default styled(Dialog)`
    .panel-overlay {
        .panel {
            max-width: 768px;
            width: 100%;
        }
    }
    button {
        margin-left: auto;
    }
    
    input, textarea {
        height: 122px;
        margin-bottom: 28px
    }

    select {
        margin-bottom: 28px;
    }
`