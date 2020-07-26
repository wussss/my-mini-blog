import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  .info-item {
    height: 60px;
    border-bottom: 1px solid #f4f5f5;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .title {
      color: #f5c1ce;
      font-weight: bold;
      font-size: 18px;
    }
    .save {
      :hover {
        color: #f5c1ce;
        cursor: pointer;
      }
    }
    .edit-field {
      color: #f5c1ce;
      margin-left: 10px;
      .input {
        width: 680px;
        height: 30px;
        margin-left: 25px;
        border: none;
        outline: none;
        ::placeholder {
          color: #d9d9d9;
        }
      }
    }
  }
`
