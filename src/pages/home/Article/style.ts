import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  .content {
    display: flex;
    flex-flow: column wrap;
    margin-left: 5px;
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
      :hover {
        font-weight: bold;
        color: #b9a1c1;
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
    .thumb {
      display: ${({ screenshot }: { screenshot: string }) => (screenshot ? 'block' : 'none')};
      flex: 0 0 auto;
      margin-left: 24px;
      width: 60px;
      height: 60px;
      border-radius: 2px;
      background-color: #fff;
      background: ${({ screenshot }) => `url(${screenshot}) no-repeat center/cover`};
      box-sizing: content-box;
    }
  }
`
