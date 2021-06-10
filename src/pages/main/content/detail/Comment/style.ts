import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 780px;
  margin: 10px auto;
  .anchor {
    width: 740px;
    height: 100px;
    background: #fdfdfc;
    margin-bottom: 20px;
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
    width: 760px;
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
          padding-bottom: 10px;
          border-bottom: 1px solid #f3f4f5;
          .info1 {
            font-size: 12px;
            color: #6c6c6c;
          }
          .info2 {
            font-size: 11px;
            color: #cecece;
          }
        }
        .content-info {
          .content {
            width: 660px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            .info3 {
              font-size: 13px;
              width: 600px;
            }
            .reply {
              color: #d1b5cc;
              cursor: pointer;
            }
          }
          .reply1 {
            margin-top: 10px;
            width: 660px;
            background: #f5f5f5;
            .r1,
            .r3 {
              color: #b6b6b6;
            }
            .r2 {
              color: #ceb9c8;
            }
            .input-reply {
              margin: 10px;
              padding-left: 5px;
              width: 600px;
              outline: none;
              box-shadow: none;
              border: 1px solid #f3f4f5;
              caret-color: #af9ab9;
            }
            .r4 {
              color: #ceb9c8;
              cursor: pointer;
            }
          }
        }
      }
      .resp {
        background: #f5f5f5;
        width: 660px;
        padding: 3px;
        margin-top: 5px;
        .respCommentList {
          margin-top: 10px;
          margin-left: 10px;
          .item {
            display: flex;
            flex-flow: row nowrap;
            .avatar {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 5px;
            }
            .info {
              padding-bottom: 10px;
              border-bottom: 1px solid #f3f4f5;
              .info1 {
                font-size: 13px;
                color: #d1b5cc;
                font-weight: bold;
              }
              .info2 {
                font-size: 11px;
                color: #cecece;
              }
            }
            .content-info {
              .content {
                width: 600px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                .info3 {
                  font-size: 13px;
                  width: 520px;
                }
                .r0 {
                  .r2 {
                    font-weight: bold;
                    color: #d1b5cc;
                  }
                }
                .reply {
                  color: #d1b5cc;
                  cursor: pointer;
                  opacity: 0.4；;
                }
              }
              .reply1 {
                margin-top: 10px;
                width: 520px;
                background: #f5f5f5;
                .r1,
                .r3 {
                  color: #b6b6b6;
                }
                .r2 {
                  color: #ceb9c8;
                }
                .input-reply {
                  margin: 10px;
                  padding-left: 5px;
                  width: 520px;
                  outline: none;
                  box-shadow: none;
                  border: 1px solid #f3f4f5;
                  caret-color: #af9ab9;
                }
                .r4 {
                  color: #ceb9c8;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
`
