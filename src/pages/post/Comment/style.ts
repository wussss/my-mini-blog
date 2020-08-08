import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 560px;
  margin: 10px auto;
  .anchor {
    width: 560px;
    height: 100px;
    background: #fdfdfc;
    .head {
      display: flex;
      flex-flow: row nowrap;
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${({ avatarLarge }: { avatarLarge: string }) => `url(${avatarLarge}) no-repeat center/cover`};
        margin-right: 5px;
      }
      .info1 {
        color: #d1b5cc;
        font-size: 12px;
        font-weight: bold;
      }
      .info2 {
        font-size: 10px;
        font-weight: bold;
      }
    }
    .edit {
      display: flex;
      flex-flow: row nowrap;
      margin: 10px 0;
      border-radius: 5px;
      padding: 3px;
      .input {
        width: 560px;
        outline: none;
        box-shadow: none;
        border: none;
        caret-color: #af9ab9;
      }
    }
    .foot {
      float: right;
      .iconfont {
        color: #d1b5cc;
        font-size: 13px;
        font-weight: bold;
      }
      .disabled {
        color: #a0a0a0;
      }
    }
  }
  .commentList {
    width: 560px;
    margin: 0 auto;
    .item {
      margin-top: 10px;
      .first-comment {
        margin-left: 40px;
        display: flex;
        flex-flow: row nowrap;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .info {
          .info1 {
            font-size: 12px;
            color: #6c6c6c;
          }
          .info2 {
            font-size: 11px;
            color: #cecece;
          }
          .info3 {
            font-size: 13px;
            width: 400px;
          }
        }
        .content-info {
          .second-comment {
            width: 400px;
            background: #f5f5f5;
          }
        }
      }
    }
  }
`
