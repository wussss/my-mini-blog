import styled from 'styled-components'

export const Wrapper = styled.div`
  .articleEdit {
    display: flex;
    flex-flow: column;
    height: 100%;
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
      height: 50px;
      background: #fff;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #cbb8cb;
      padding-right: 15px;
      input {
        width: 50%;
        height: 100%;
        outline: none;
        box-shadow: none;
        border: none;
      }
      .right-box {
        display: flex;
        align-items: center;
        position: relative;
        right: 100px;
        .upload-img {
          position: relative;
          display: flex;
          align-items: center;
          .img-cover {
            color: #cbb8cb;
            font-size: 12px;
          }
          .img-selector {
            z-index: 2;
            opacity: 0;
            position: relative;
            left: 40px;
            cursor: pointer;
          }
          .image-preview {
            border: none;
            width: 30px;
            height: 30px;
            margin-left: 20px;
            overflow: hidden;
            background: ${({ screenshot }: { screenshot: string }) => `url(${screenshot}) no-repeat center/cover`};
            cursor: none;
          }
        }
        .back {
          margin-right: 10px;
          color: #cbb8cb;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
    .main {
      position: fixed;
      top: 40px;
      width: 100%;
      height: 100%;
      background: #fff;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      border: 1px solid #cbb8cb;
      opacity: 0.5;
      .codemirror {
        width: 50%;
        border-right: 2px solid #cbb8cb;
        font-size: 15px;
        padding-top: 5px;
      }
      .preview {
        padding-top: 10px;
        padding-left: 5px;
        width: 50%;
      }
    }
  }
`
