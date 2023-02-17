import styled from 'styled-components'

export default styled.div`
    .two-column {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 17.5px;
        .column {
            display: flex;
            flex-direction: column;
            flex-basis: auto;
            flex: 1;
            width: 48%;
        }
   }
`