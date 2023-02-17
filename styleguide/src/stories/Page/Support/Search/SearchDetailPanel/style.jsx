import styled from 'styled-components'

export default styled.div`
    .two-column {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        > div {
            flex-basis: 50%;
        }
    }
`