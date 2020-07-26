import styled from 'styled-components'
export const Wrapper = styled.div`
  .avatar-menu {
    display: flex;
    align-items: center;
    .username {
      color: #cbb8cb;
      margin-top:20px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${({ avatar }: { avatar: string }) => ` #cbb8cb url(${avatar}) no-repeat center/cover`};
      cursor: pointer;
    }
    .dropdown-list {
      position: absolute;
      top: 100%;
      z-index: 10;
      width: 120px;
      padding: 12px 0;
      background: #ccbacb;
      opacity: 0.8;
      border: 1px solid rgba(177, 180, 185, 0.45);
      border-radius: 6px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      .menu-item {
        display: flex;
        justify-content: start;
        padding: 6px 12px;
        font-size: 10px;
        color: #fff;
        :hover {
          font-weight: bold;
          background: rgba(255, 242, 242, 0.5);
        }
      }
    }
  }
`
