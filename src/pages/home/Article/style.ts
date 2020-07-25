import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  .content {
    display: flex;
    flex-flow: column wrap;
    margin-left: 5px;
    font-size: 12px;
    border-top:1px solid #F4F5F5;
    padding-top:5px;
    .info_box {
      display: flex;
      flex-flow: row nowrap;
      color: #e7c5d3;
      .info_item {
        :not(:first-child)::before {
          content: '|';
          margin: 0 10px;
        }
        :first-child {
          :hover {
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
    .article {
      cursor: pointer;
      width:800px;
      position:relative;
      :hover {
        font-weight: bold;
        color: #b9a1c1;
      }
      .title {
        font-size: 15px;
        font-weight: bold;
      }
      .abstract {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
       
      }
      .photo {
        display: ${({ screenshot }: { screenshot: string }) => (screenshot ? 'block' : 'none')};
        flex: 0 0 auto;
        position:absolute;
        left: 700px;
        top:-10px;
        width: 60px;
        height: 60px;
        border-radius: 2px;
        background: ${({ screenshot }: { screenshot: string }) => `url(${screenshot}) no-repeat center/cover`};
        box-sizing: content-box;
      }
    }
    .icon_like {
      cursor: pointer;
      margin-top: 5px;
      color: #b9a1c1;
      display: flex;
      align-items: center;
      .likeCountNew {
        font-size: 13px;
        margin-left: 2px;
      }
    }
  }
`
