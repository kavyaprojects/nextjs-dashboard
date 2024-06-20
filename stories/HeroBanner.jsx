
import React from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.css';
import styles from '../app/ui/home.module.css'

const HeroBanner = ({ title, subtitle, description }) => {
  return (
    <div className= {`hero-banner flex h-full flex-col py-4 ${styles.herobackgroundImage}`}>  
    <div className="hero-content  text-white border-l-8 border-white mr-auto ml-auto ">
        <p className="hero-description">{description}</p>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroBanner;
