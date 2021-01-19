import React, { FC } from 'react';
import Popup from 'reactjs-popup';

const OptionPicker: FC = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    <span> Modal content </span>
  </Popup>
);

export default OptionPicker;
