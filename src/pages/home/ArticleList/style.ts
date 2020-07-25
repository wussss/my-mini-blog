import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 800px;
  height: 1200px;
  background: #fff;
  list-style: none;
  .navList {
    display: flex;
    flex-flow: row nowrap;
    margin: 5px;
    li {
      :hover {
        cursor: pointer;
      }
      color: #cbb8cb;
      font-size: 15px;
      :not(:first-child)::before {
        content: '/';
        margin: 0 10px;
      }
    }
    .active {
      font-weight: bold;
      font-size: 16px;
    }
  }
  .articleList {
    display: flex;
    flex-flow: column wrap;
  }
`
