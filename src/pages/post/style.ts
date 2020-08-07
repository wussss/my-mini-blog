import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 800px;
  margin: 70px auto;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: row nowrap;
  .left {
    display: flex;
    flex-flow: column nowrap;
    width: 600px;
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    width: 200px;
    border-left:1px solid #F3F4F5;
  }
`
