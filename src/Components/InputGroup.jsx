import { StyledInputGroup } from './Styled/InputGroup.styled';

const InputGroup = ({inputref, placeholder, text, onChange, errorMessage, hasError }) => {
  return (
    <StyledInputGroup className={hasError && 'has-error'}>
      <input ref={inputref} placeholder={placeholder} value={text} onChange={e => onChange(e.target.value)}/>
      <span>{errorMessage ? errorMessage : 'Error'}</span>
    </StyledInputGroup>
  )
}

export default InputGroup
;