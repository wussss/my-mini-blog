import styled from 'styled-components'

import logoPic from '@/statics/logo.png'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    .logo-link {
      cursor: pointer;
      .logo {
        width: 40px;
        height: 40px;
        background: url(${logoPic}) no-repeat center/contain;
      }
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 600px;
      .search {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 60px;
        input {
          width: 300px;
          height: 30px;
          border: 1px solid #cbb8cb;
        }
        button {
          border: none;
          background: #cbb8cb;
          width: 60px;
          height: 30px;
          cursor: pointer;
          margin-left: -20px;
          span {
            color: #fff;
            font-weight: bold;
          }
        }
      }
      .write {
        button {
          border: none;
          background: #fff;
          width: 80px;
          height: 30px;
          cursor: pointer;
          margin-left: -20px;
          span {
            font-weight: bold;
            color: #cbb8cb;
          }
        }
      }
      .register {
        button {
          border: none;
          background: #fff;
          width: 60px;
          height: 30px;
          cursor: pointer;
          margin-left: -20px;
          span {
            font-weight: bold;
            color: #cbb8cb;
          }
        }
      }
      .login {
        button {
          border: none;
          background: #fff;
          width: 60px;
          height: 30px;
          cursor: pointer;
          margin-left: -20px;
          span {
            font-weight: bold;
            color: #cbb8cb;
          }
        }
      }
    }
  }
`
