import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

import hero from 'assets/images/hero.png';
import hero2 from 'assets/images/hero2.png';
import hero3 from 'assets/images/hero3.png';

import HeroImage from 'components/molecules/HeroImage/HeroImage';
import Testimonials from 'components/molecules/Testimonials/Testimonials';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';

import { routes } from 'routes';

const MainTemplate = ({ children, location }) => {
  const { pathname } = location;
  let image = hero;

  switch (pathname) {
    case routes.facilities:
      image = hero2;
      break;
    case routes.rooms:
      image = hero3;
      break;
    default:
      image = hero;
  }

  return (
    <>
      <Helmet lang="en" title="Luxury hotels" />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navigation />
        {pathname !== routes.contact && <HeroImage src={image} />}
        {children}
        {pathname !== routes.contact && <Testimonials />}
        <Footer />
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

MainTemplate.defaultProps = {
  location: null,
};

export default MainTemplate;
