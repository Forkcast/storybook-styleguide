import styled from 'styled-components'

export default styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13.67px;
    line-height: 16.66px;
    position: relative;
    &.disabled {
        &.form-style{
            &:hover {
                .edit-icon {
                    display: none;
                }
            }
            select {
                background-color: white;
            }
        }      
    }

    label {
        color: #717171;
        position: absolute;
        top: -8px;
        left: 15px; 
        background-color: white;        
    }

    select {
        border: solid 1px #D2D5DB;
        border-radius: 4px;
        height: 40px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #242424;
        padding:10px;
        width: 100%;
    }
`
