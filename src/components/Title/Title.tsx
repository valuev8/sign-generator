import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../styles/variables';
import OptionPicker from '../OptionPicker/OptionPicker';

const Title: FC = () => (
  <TitleWrapper className="title-wrapper">
    <h1> Create Your Signature! </h1>
    <h2> You can draw it or pick from existed font styles</h2>
    <OptionPicker />
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  text-align: center;
  
  h1 {
    font-size: 42px;
    margin-bottom: 15px;
  };
  
  h2 {
    font-size: 21px;
    color: ${colors.eggYellow};
    font-family: ${fonts.secondaryFont};
    font-weight: 300;
  }
`

export default Title;
