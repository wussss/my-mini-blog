import styled from 'styled-components'
export const Wrapper = styled.div`
  .author {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    width: 800px;
    padding: 10px 10px;
    position: relative;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${({ avatarLarge }: { avatarLarge: string }) => `url(${avatarLarge}) no-repeat center/cover`};
      margin-right: 5px;
    }
    .name {
      font-size: 15px;
      color: #bba7c2;
      font-weight: bold;
    }
    .time {
      color: #8d96a2;
    }
    .reedit {
      color: #efbccd;
      position: absolute;
      left: 220px;
      top: 31px;
      cursor: pointer;
    }
  }
  .article {
    margin: 10px 10px;
    .cover {
      display: ${({ screenshot }: { screenshot: string; avatarLarge: string }) => (screenshot ? 'block' : 'none')};
      background: ${({ screenshot }) => `url(${screenshot}) no-repeat center/cover`};
      width: 780px;
      height:500px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0;
    }
    .content {
    }
  }
`
