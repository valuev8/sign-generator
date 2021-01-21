import { Dialog } from "@material-ui/core";
import React, { FC, PropsWithChildren } from "react";

export interface SignPopupProps {
  open: boolean;
  onClose: () => void;
}

export const SignPopup: FC<SignPopupProps> = (props: PropsWithChildren<SignPopupProps>) => {
  const { onClose, open, children } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      { children }
    </Dialog>
  );
}
