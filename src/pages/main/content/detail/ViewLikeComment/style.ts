import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 50px;
  left: -50px;
  .data {
    position: relative;
    margin-bottom: 5px;
    .circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #fff;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        color: #eabbcb;
      }
      &.like {
        cursor: pointer;
      }
    }
    .circle-n {
      width: 18px ;
      height: 18px;
      border-radius: 50%;
      background: #eabbcb;
      position: absolute;
      top: -8px;
      right: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .viewcount {
        color: #fff;
      }
    }
  }
`
