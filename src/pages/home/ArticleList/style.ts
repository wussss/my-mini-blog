import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  background: #fff;
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
      font-size: 14px;
    }
  }
  .articleList {
    display: flex;
    flex-flow: column wrap;
  }
`
