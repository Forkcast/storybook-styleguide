import styled from 'styled-components'

export default styled.div`
    ${({loading}) => loading  ?  
        `text-align: center;`
        : ''
    }
    
`