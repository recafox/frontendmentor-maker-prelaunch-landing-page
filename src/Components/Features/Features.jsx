import { StyledFeaturesWrapper } from './Styled';
import Card from './Card';

const features = [
  {
    image: "illustration-passions.svg",
    title: 'Indulge your passions',
    content: "Your passions shouldn't be just for the weekend. Earn a living doing what you love."
  },
  {
    image: "illustration-financial-freedom.svg",
    title: "Gain financial freedom",
    content: "Start making money work for you. There’s nothing quite like earning while you sleep."
  },
  {
    image: "illustration-lifestyle.svg",
    title: "Choose your lifestyle",
    content: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
  },
  {
    image: "illustration-work-anywhere.svg",
    title: "Work from anywhere",
    content: "Selling online means not being pinned down. Want to work AND travel? Go for it!"
  }
];

const Features = (props) => {

  const renderCards = () => {
    return features.map((feature, index) => <Card item={feature} key={index} isLower={index % 2 !== 0}/>)
  }

  return (
    <StyledFeaturesWrapper {...props}>
      {renderCards()}
    </StyledFeaturesWrapper>
  )
};

export default Features;