import { Box } from '@mui/system';
import { Typography } from '@mui/material';

interface IHeader {
  text: string;
}

export default function Header({ text }: IHeader): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        pb: 1,
      }}
    >
      <Typography
        color="primary"
        sx={{
          fontFamily: (theme) => theme.custom.typography.families.cursive,
          fontSize: 'sizes.xxl',
        }}
        component="h2"
      >
        {text}
      </Typography>
    </Box>
  );
}
