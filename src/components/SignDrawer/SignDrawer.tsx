import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import CanvasDraw from 'react-canvas-draw';
import { colors, fonts } from '../../styles/variables';
import { GetApp, Replay } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const SignDrawer: FC = () => {
  let canvasRef = useRef<CanvasDraw>(null);

  const clearCanvas = () => {
    canvasRef.current.clear();
  }

  const downloadSignature = () => {
    const link: HTMLAnchorElement = document.createElement('a');
    // package for drawing does not provide proper 'download' feature,
    // so need to patch it a bit
    // @ts-ignore
    const canvasDrawing: HTMLCanvasElement = canvasRef.current.canvas.drawing;
    const context = canvasDrawing.getContext('2d');
    const backgroundColor = '#fff';

    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvasDrawing.height, canvasDrawing.width);
    link.download = 'signature';

    link.href = canvasDrawing.toDataURL("image/png;base64");

    link.click();
  }

  return (
    <StyledSignDrawer>
      <h2> Draw Your Signature! </h2>
      <CanvasDraw
        ref={canvasRef}
        className='canvas'
        hideGrid={true}
        brushRadius={2}
        lazyRadius={0}
        catenaryColor={colors.mainWhite}
        brushColor={colors.mainBlack}/>
      <Button
        variant='outlined'
        className='btn'
        color='primary'
        startIcon={ <GetApp /> }
        onClick={downloadSignature}>
        Download
      </Button>
      <DangerButton
        variant='outlined'
        className='btn'
        startIcon={ <Replay /> }
        onClick={clearCanvas}>
        Reset
      </DangerButton>
    </StyledSignDrawer>
  );
};

const StyledSignDrawer = styled.div`
  padding: 15px;
  border: 1px solid ${colors.lightGrey};
  background: ${colors.darkGrey};
  text-align: center;
  
  .canvas {
    margin-bottom: 15px;
  }
  
  .btn {
    margin: 0 15px;
  }
  
  h2 {
    font-family: ${fonts.fontAmatic};
    text-align: center;
    color: ${colors.eggYellow};
    margin: 10px 0;
  }
`;

const DangerButton = styled(Button)`
  color: darkred !important;
  border-color: darkred !important;
`

export default SignDrawer;
