import styled from 'styled-components'
// @import headPicIcon from '../../'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-right: 80px;
  .publish {
    width: 180px;
    color: #cbb8cb;
    font-size: 12px;
    :hover {
      cursor: pointer;
    }
    .preview {
      color: #fff;
      background: #cbb8cb;
      border: 1px solid #cbb8cb;
      border-radius: 5px;
      margin-left: 5px;
      padding: 2px;
    }
  }
  .confirm {
    width: 100px;
    color: #f2aebd;
    font-weight: bold;
    background: #fff;
    :hover {
      cursor: pointer;
      color: #fff;
      background: #f2aebd;
    }
    border: 1px solid #f2aebd;
    border-radius: 5px;
  }
  .blog-type {
    position: absolute;
    top: 100%;
    z-index: 10;
    width: 185px;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background: #fff;
    ul {
      display: flex;
      flex-flow: row wrap;
      padding: 10px;
      .type {
        color: #cbb8cb;
        :hover {
          cursor: pointer;
          border: 2px solid #cbb8cb;
        }
        border: 1px solid #cbb8cb;
        border-radius: 5px;
        margin: 5px;
        padding: 2px;
      }
      .new {
        color: #fff;
        background: #cbb8cb;
      }
    }
  }
`
