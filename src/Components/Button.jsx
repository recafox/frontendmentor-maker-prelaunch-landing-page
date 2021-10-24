import { StyledButton } from './Styled/Button.styled';
import { memo } from 'react';

const Button = ({children, onClick, buttonRef}) => {
  return <StyledButton onClick={onClick} ref={buttonRef}>{children}</StyledButton>
}

export default memo(Button);