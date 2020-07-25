import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  margin: 70px auto;
  background: #fff;
  .navList {
    border-bottom: 1px solid #f4f5f5;
    display: flex;
    flex-flow:row nowrap 
    li {
      margin: 10px;
      background:#fff;
    }
    .active{
      background:#C0AFC8;
      color:#fff;
    }
  }
`
