import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Components/Styled/Global';
import { StyledWrapper } from './Styled/Wrapper.styled';
import Logo from './Logo';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import PricingPlans from './PricingPlans/PricingPlans';
import Subscription from './Subscription/Subscription';

const theme = {
  colors: {
    bg: '#080C20',
    title: '#fff',
    text: '#777F98',
    darkerBlue: '#093F68',
    lightBlue: '#3EE9E5',
    error: '#FF2965'
  },
  breakPoints: {
    tablet: '1024px',
    mobile: '567px'
  }
}


function App() {

  useEffect(() => {
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fadeIn');
      })
    }

    // scroll effect
    document.querySelectorAll('.observer-target').forEach((target) => {
      if (target) {
        let observer = new IntersectionObserver(callback, {
          root: null,
          threshold: 0.3
        });
        observer.observe(target);
      }
    })
  }, []);


  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledWrapper>
        <Logo />
        <Hero />
        <Features className="observer-target" />
        <PricingPlans className="observer-target" />
        <Subscription className="observer-target" />
      </StyledWrapper>
    </ThemeProvider>
    </>
  );
}

export default App;
