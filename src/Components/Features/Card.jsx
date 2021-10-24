import { StyledCard } from './Styled';
import { StyledParagraph } from '../Styled/Paragraph.styled';
const Card = ({ item, isLower }) => {
  return (
    <StyledCard isLower={isLower} className="feature-card">
      <div>
        <img src={`./assets/${item.image}`} alt="" />
      </div>
      <h4>{item.title}</h4>
      <StyledParagraph>{item.content}</StyledParagraph>
    </StyledCard>
  )
}

export default Card;