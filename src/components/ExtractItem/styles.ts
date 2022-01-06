import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 8px;
  & .see_more{
      margin-left: auto;
  }
  & .items-content {
    display: flex;
    flex-direction: column;
    & span{
        font-size: 12px;
        color: gray;
    }
  }
`;