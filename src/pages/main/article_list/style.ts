import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 960px;
  height: 800px;
  margin: 70px auto;
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
      font-size: 15px;
    }
  }
  .articleList {
    display: flex;
    flex-flow: column wrap;
  }
`
