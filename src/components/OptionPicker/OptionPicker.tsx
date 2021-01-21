import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { SignPopup } from '../Popup/Popup';
import styled from 'styled-components';
import { Create, Brush } from '@material-ui/icons';
import { colors } from '../../styles/variables';
import SignDrawer from '../SignDrawer/SignDrawer';

const OptionPicker = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledOptionPicker>
      <Button
        variant='outlined'
        className='btn'
        color='primary'
        startIcon={ <Brush /> }
        onClick={handleClickOpen}>
        Draw
      </Button>
      <Button
        variant='outlined'
        className='btn'
        color='primary'
        startIcon={ <Create /> }
        onClick={handleClickOpen}>
        Type
      </Button>
      <SignPopup open={open} onClose={handleClose}>
        <SignDrawer />
      </SignPopup>
    </StyledOptionPicker>
  );
}

const StyledOptionPicker = styled.div`
  display: flex;
  justify-content: center;
  color: ${colors.mainWhite};
  
  .btn {
    margin: 0 10px;
  }
`

export default OptionPicker;
