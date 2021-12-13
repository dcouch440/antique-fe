import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  && {
    position: relative;
    border-bottom: 1px solid white;
    color: white;
    * {
      outline: none;
      color: white;
      box-shadow: none;
      background-color: none;
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
export default function AppInput({ ...props }): JSX.Element {
  return <StyledInput color="primary" {...props} />;
}
