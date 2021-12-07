import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 98%;
  padding: 20px;
  margin-bottom: 10px;
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