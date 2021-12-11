import CloseIcon from '@mui/icons-material/Close';
import { Fab } from '@mui/material';

interface ICloseButton {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function CloseButton({ onClick }: ICloseButton): JSX.Element {
  return (
    <Fab color="primary" onClick={onClick}>
      <CloseIcon />
    </Fab>
  );
}
