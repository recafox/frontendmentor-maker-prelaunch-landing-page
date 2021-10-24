import { memo } from 'react';
import { StyledSectionTitle } from './Styled/SectionTitle.styled'
const SectionTitle = ({ text }) => {
  return (
    <>
      <StyledSectionTitle>{text}</StyledSectionTitle>
    </>
  )
}

export default memo(SectionTitle);