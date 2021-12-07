// @flow 
import * as React from 'react';

import { SubTitle } from '../../styles/global';
import { MdChevronRight } from "react-icons/md/";
import { Item } from './styles';

type Props = {
    date: string
    amount: string
};

export const ExtratoItem = ({date, amount}: Props) => {
    return (
        <Item>
            <div className="items-content">
                <SubTitle>{ date }</SubTitle>
                <span>Resgate de: R$ { amount }</span>
            </div>
            <div className="see_more">
              <MdChevronRight color="gray" size="24" />
            </div>
          </Item>
    );
};