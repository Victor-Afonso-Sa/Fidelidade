import styled  from 'styled-components';
import { Cards } from '../../types/global';



export const CardsContainer = styled.div<Cards>`
  display: flex;
  flex-direction: column;
  color: ${({color, theme}) => color ?? theme.primary};;
  background-color: ${({background, theme}) => background ?? theme.background};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;