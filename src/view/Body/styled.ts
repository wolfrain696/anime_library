import {styled} from '@mui/material/styles';
import {Link} from 'react-router-dom';

export const ExitButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #f598a8, #f6edb2);
  padding: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
`;
