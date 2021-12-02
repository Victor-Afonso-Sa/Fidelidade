import styled from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  height: 70px;
`
export const HeaderContent = styled.div`
  width: calc(100vw - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const UserName = styled.div`
  color: #fff;
  margin-right: 25px;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  & span {
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const UserAcount = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
`
