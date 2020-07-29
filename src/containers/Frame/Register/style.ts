import styled from 'styled-components'
export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  .login-box {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid #c1adc8;
    margin: 300px auto;
    background: #fff;
    .head {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-top: 10px;
      h1 {
        font-size: 12px;
        font-weight: bold;
        padding-left: 5px;
        color: #c1adc8;
      }
      span {
        padding-right: 5px;
        color: #c1adc8;
        :hover {
          cursor: pointer;
        }
      }
    }
    .input-panel {
      .input-group {
        display: flex;
        flex-flow: column nowrap;
        width: 260px;
        margin: 20px auto;
        .input-item {
          display: flex;
          align-items: center;
          position: relative;
          .input {
            border-radius: 5px;
            height: 25px;
            width: 280px;
            margin-bottom: 5px;
            border: 1px solid #c1adc8;
            outline: none;
            color: #c1adc8;
            padding-left: 5px;
          }
          span {
            position: absolute;
            color: #c1adc8;
            right: 10px;
            font-size: 12px;
            :hover {
              cursor: pointer;
            }
          }
        }
      }
      .foot {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .commit-btn {
          background: #c1adc8;
          color: #fff;
          border: none;
          border-radius: 2px;
          margin-right: 10px;
          height: 20px;
          cursor: pointer;
        }
        .switch {
          width: 100px;
          background: #f3bdcd;
          color: #fff;
          border: none;
          border-radius: 2px;
          height: 20px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
`
