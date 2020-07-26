import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: 8px;
  margin-top:30px;
  ul {
    display: flex;
    flex-flow: column wrap;
    li {
      height: 60px;
      border-bottom: 1px solid #f4f5f5;
      padding: 10px;
    }
    .avatar {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .title {
        color: #f5c1ce;
        font-weight: bold;
        font-size:20px;
      }
      .previous {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        margin-left: 30px;
        background: ${({ avatarLarge }: { avatarLarge: string }) => `url(${avatarLarge}) no-repeat center/cover`};
      }
      .upload-img {
        position: relative;
        display: flex;
        align-items: center;
        color: #c6afbf;
        top: 5px;
        .img-cover {
          font-size: 20px;
          position: relative;
          margin-right: 5px;
        }
        .img-select {
          z-index: 2;
          opacity: 0;
          position: relative;
          cursor: pointer;
          left: -300px;
        }
      }
    }
  }
`
