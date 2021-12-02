// @flow
import * as React from 'react'
import { HeaderContent, UserAcount, UserName, Wrapper } from './styles'
import MiniLogo from '../../assets/mini-logo.svg'
import { MdAccountCircle, MdExpandMore } from 'react-icons/md'

type Props = {
  name: string
}

export const Header = ({ name }: Props) => {
  return (
    <Wrapper className="col-12">
      <img src={MiniLogo} alt="Logo Araujo" width="40" height="60" />
      <HeaderContent>
        <UserName>
          <span>Olá </span> {name}
        </UserName>
        <UserAcount>
          <MdAccountCircle size="60px" />
          <MdExpandMore size="30px" />
        </UserAcount>
      </HeaderContent>
    </Wrapper>
  )
}
