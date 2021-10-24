import SectionTitle from "../SectionTitle";
import { StyledParagraph } from "../Styled/Paragraph.styled";
import PlanCard from "./PlanCard";
import { CardContainer, PlanContainer } from "./Styled";

const plans = [
  {
    icon: "icon-free.svg",
    title: "Dip your toe",
    description: "Just getting started? No problem at all! Our free plan will take you a long way.",
    fee: {
      amount: 0,
      per: null
    },
    features: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "10% fee per transaction"
    ]
  },
  {
    icon: "icon-paid.svg",
    title: "Dive right in",
    description: "Ready for the big time? Our paid plan will help you take your business to the next level.",
    fee: {
      amount: 25.00,
      per: "month"
    },
    features: [
      "Custom domain",
      "Advanced analytics and reports",
      "High marketplace visibility",
      "5% fee per transaction"
    ]
  }
]



const PricingPlans = (props) => {
  const renderPlans = () => {
    return plans.map((plan, index) => <PlanCard key={index} item={plan} tone={index % 2 === 0 && 'darkBlue'} isLarger={index % 2 !== 0}/>);
  }
  return (
    <PlanContainer {...props}>
      <SectionTitle text="Our pricing plans" />
      <StyledParagraph>
        We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.
      </StyledParagraph>
      <CardContainer>
        {renderPlans()}
      </CardContainer>
    </PlanContainer>
  )
}

export default PricingPlans;