import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 800px;
  margin: 70px auto;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  list-style: none;
  .navList {
    display: flex;
    flex-flow: row nowrap;
    padding: 10px 20px;
    li {
      :hover {
        cursor: pointer;
      }
      color: #cbb8cb;
      font-size: 12px;
      :not(:first-child)::before {
        content: '|';
        margin: 0 10px;
      }
    }
    .active {
      font-weight: bold;
      font-size: 15px;
    }
  }
  .articleList {
    display: flex;
    flex-flow: column wrap;
  }
`
