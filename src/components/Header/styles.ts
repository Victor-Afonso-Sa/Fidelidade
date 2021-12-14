import styled from 'styled-components'
interface HeaderContentType {
  cargo: boolean
}

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  height: 70px;

  & .header__title{
    margin-left: 28px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: lighter;
  }
`
export const HeaderContent = styled.div<HeaderContentType>`
  margin-left: auto;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  background-color: ${({cargo, theme}) => cargo ? theme.darkBlue : "transparent"};
`
export const UserName = styled.div`
  display: flex;
  flex-direction: column;
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
export const Dropdown = styled.div`
  position: absolute;
  right: 5px;
  margin-top: 5px;
  border-radius: 10px;
  min-width: 190px;
  background-color: #fff;
  z-index: 10;
  padding: 10px;
`