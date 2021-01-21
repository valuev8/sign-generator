import React, { FC } from 'react';
import styled from 'styled-components';
import { fonts } from '../../styles/variables';

const Title: FC = () => (
  <TitleWrapper className="title-wrapper">
    <h1> Create Your Signature! </h1>
    <h2> You can draw it or pick from existed font styles</h2>
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  text-align: center;
  
  h1 {
    font-size: 42px;
    margin-bottom: 10px;
  };
  
  h2 {
    font-size: 16px;
    font-family: ${fonts.fontAmatic};
    font-weight: 300;
    margin-bottom: 30px;
  }
`

export default Title;
