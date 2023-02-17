import styled from 'styled-components'

export default styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  border-radius: 6px;
  border: 1px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13.51px;
  line-height: 16.47px;
  background: #201751;
  color: #FFFFFF;
  flex: none;
  flex-grow: 0;
  cursor: pointer;
  &.secondary {
    background: #00A98F;
  }
  &.tertiary {
    background: #F3523F;
  }
  &:disabled, &.secondary:disabled, &.tertiary:disabled {
    background: #D2D1DC;
  }
`