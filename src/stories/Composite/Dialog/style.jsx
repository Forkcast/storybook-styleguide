import styled from 'styled-components'

export default styled.div`

  &.hide {
    display: none !important;
  }

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  .overlay {
    background: rgba(0,0,0,0.25);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .panel-overlay {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    
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
