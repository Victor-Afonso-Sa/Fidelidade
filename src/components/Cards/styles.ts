import { Card } from 'antd';
import styled  from 'styled-components';
import { Cards } from '../../types/global';



export const CardsContainer = styled(Card)<Cards>`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({color, theme}) => color ?? theme.primary};;
  background-color: ${({background, theme}) => background ?? theme.background};
  margin: 20px;
  border-radius: 10px;
  width: 50%;
  animation: fadeInUp;
  animation-duration: 1.2s;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;