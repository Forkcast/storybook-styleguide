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
            input {
                background-color: white;
            }
        }      
    }

    .edit-icon {
        display: none;
    }

    label {
        color: #717171;
        position: absolute;
        top: -8px;
        left: 15px; 
        background-color: white;        
    }

    input {
        border: solid 1px #D2D5DB;
        border-radius: 4px;
        height: 18px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #242424;
        padding:15px;
        width: calc(100% - 30px);
    }

    &.form-style {

        label {
            color: #717171;
            position: static;
            margin-bottom: 5px;
            display: block;            
        }

        input {
            border: solid 0px;
            border-bottom: solid 1px rgba(0,0,0,0.5);
            border-radius: 0px;
            padding: 0px;
            font-size: 15.9468px;
            line-height: 17px;
            color: #717171;
            &:focus  {
                outline: none;                        
                border-bottom: solid 1px #00A98F;
            }
        }

        &:hover {
            .edit-icon {
                display: block;
                position: absolute;
                right: 50px;
                top: 0px;
           }
        }

    }
`
