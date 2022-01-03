import { TextField, styled } from '@mui/material';

const StyledInput = styled(TextField)`
  && {
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.main};
    legend > span {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
    * {
      color: ${({ theme }) => theme.palette.primary.main};
      outline: none;
      box-shadow: none;
      background-color: none;
      font-size: 16px;
      @media (${({ theme }) => theme.breakpoints.down('sm')}) {
        font-size: ${({ theme }) => theme.custom.typography.sizes.sm}px;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border-bottom: 1px solid #4c6779;
      -webkit-text-fill-color: #ffffff;
      -webkit-box-shadow: 0 0 0px 1000px #f1f1f142 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

/**
 * * Used for AppSearchBar and Logins etc.
 * * This is a highly stylized version of Mui's TextField.
 */

export default function AppInput({ ...props }): JSX.Element {
  return <StyledInput color="primary" {...props} />;
}
