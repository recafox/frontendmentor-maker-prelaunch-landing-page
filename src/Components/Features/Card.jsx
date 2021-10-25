import { StyledCard, StyledTextGroup, StyledImgCard } from './Styled';
import { StyledParagraph } from '../Styled/Paragraph.styled';
const Card = (props) => {
  const { item } = props;
  const { isEven } = props;
  return (
    <StyledCard isEven={isEven} className={`feature-card ${props.className}`}>
      <StyledImgCard>
        <img src={`./assets/${item.image}`} alt="" />
      </StyledImgCard>
      <StyledTextGroup>
        <h4>{item.title}</h4>
        <StyledParagraph>{item.content}</StyledParagraph>
      </StyledTextGroup>
    </StyledCard>
  )
}

export default Card;