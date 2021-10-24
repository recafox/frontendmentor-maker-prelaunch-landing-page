import Background from './Background'
import Title from './Title';
import CTA from './CTA';
import { StyledHero } from './Styled';

const Hero = () => {
  return (
    <StyledHero>
      <Background />
      <Title />
      <CTA />
    </StyledHero>
  )
}

export default Hero;