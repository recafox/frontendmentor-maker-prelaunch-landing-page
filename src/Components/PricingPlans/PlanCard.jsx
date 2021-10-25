import { StyledParagraph } from "../Styled/Paragraph.styled";
import { StyledPlanCard } from './Styled';

const PlanCard = (props) => {
  const { item } = props;
  const { tone } = props;
  const renderFee = () => {
    if (item.fee.amount === 0) {
      return <p>Free</p>
    }
    return (
      <>
        <p>
          ${item.fee.amount}
        </p>
        <small>/ {item.fee.per}</small>
      </>
    )
  }

  const renderFeatures = () => {
    const iconPath = tone === 'darkBlue' ? 'icon-check-lightblue.svg' : "icon-check.svg";
    return item.features.map((feature, index) => {
      return (
        <li key={index}>
          <img src={`./assets/${iconPath}`} alt="check"/>
          <span>{feature}</span>
        </li>
      )
    })
  }

  return (
    <StyledPlanCard {...props}>
      <img className="icon" src={`./assets/${item.icon}`} alt="icon" />
      <div>
        <h5>{item.title}</h5>
        <StyledParagraph>
          {item.description}
        </StyledParagraph>
        <div className="price">
          {renderFee()}
        </div>
      </div>
      <ul>
        {renderFeatures()}
      </ul>
    </StyledPlanCard>
  )
};

export default PlanCard;