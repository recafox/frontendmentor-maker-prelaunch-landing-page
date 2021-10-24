import { useState, useEffect, useRef } from 'react';
import InputGroup from '../InputGroup';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import { StyledSubscriptionWrapper, StyledInputWrapper } from './Styled';
const Subscription = (props) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");
  const inputRef= useRef();
  const submitBtnRef = useRef();

  useEffect(() => {
    if (value && hasError && error) {
      setHasError(false);
      setError("");
    }
  }, [value, error, hasError]);

  useEffect(() => {
    const resetError = (e) => {
      if (!inputRef.current.contains(e.target) && !submitBtnRef.current.contains(e.target)) {
        setHasError(false);
        setError("");
      }
    };
    document.body.addEventListener('click', resetError)
    return () => {
      document.body.removeEventListener('click', resetError);
    }
  }, []);
  
  const onSubmit = () => {
    if (!value) {
      setHasError(true);
      setError("Please enter your email");
    }
  }
  return (
    <StyledSubscriptionWrapper {...props}>
      <SectionTitle text="Get notified when we launch" />
      <StyledInputWrapper>
        <InputGroup
          inputref={inputRef}
          placeholder="Email address"
          text={value}
          onChange={setValue}
          hasError={hasError}
          errorMessage={error}>
        </InputGroup>
        <Button buttonRef={submitBtnRef} onClick={onSubmit}>
          Get notified
        </Button>
      </StyledInputWrapper>
    </StyledSubscriptionWrapper>
  )
}

export default Subscription;