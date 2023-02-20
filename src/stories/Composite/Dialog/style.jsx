import styled from 'styled-components'

export default styled.div`

  &.hide {
    display: none !important;
  }

  .overlay {
    background: rgba(0,0,0,0.25);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  .panel-overlay {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .title-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 24px;
      .title {
        flex: 5;
        h3 { 
          margin: 0px;
        }
      }
      .close {
        font-weight: 700;
        font-family: "Montserrat";
        cursor: pointer;
        text-align: right;
      }
    }
  }
`
