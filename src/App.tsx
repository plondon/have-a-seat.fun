import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// Import photos
import AboutImg from './images/About.jpg';
import ConeyIsland from './images/Coney Island, 2016.jpg';
import KyotoRestaurantBench from './images/Kyoto Restaurant Bench, 2018.jpg';
import Lanzarote from './images/Lanzarote, 2018.jpg';
import LisbonOverlookWithBench from './images/Lisbon Overlook with Bench, 2019.jpg';
import LisbonParkBench2 from './images/Lisbon Park Bench 2, 2019.jpg';
import LisbonParkBench3 from './images/Lisbon Park Bench 3, 2019.jpg';
import LisbonParkBenchOcean from './images/Lisbon Park Bench by the Ocean, 2019.jpg';
import LisbonTrainStation from './images/Lisbon Train Station, 2019.jpg';
import LosJardinesLaGranja from './images/Los Jardines de La Granja de San Ildefonso, 2019.jpg';
import MadridParkBench from './images/Madrid Park Bench, 2019.jpg';
import MadridParkBench2 from './images/Madrid Park Bench 2, 2019.jpg';
import MadridRedBench from './images/Madrid Red Bench, 2017.jpg';
import Mundaka from './images/Mundaka, 2018.jpg';
import ParisTrainStation from './images/Paris Train Station, 2019.jpg';
import ParisTrainStation2 from './images/Paris Train Station 2, 2019.jpg';
import ParisTrainStation3 from './images/Paris Train Station 3, 2019.jpg';
import Skiathos from './images/Skiathos, 2019.jpg';
import TokyoSubway from './images/Tokyo Subway, 2018.jpg';
import ToledoTrainStation from './images/Toledo Train Station, 2017.jpg';

const SETTINGS = {
  dots: false,
  infinite: true,
  lazyLoad: 'progressive',
  nextArrow: (
    <button className="slick-arrow slick-next">
      <i
        style={{ color: 'white', fontSize: '1.5rem' }}
        className="fas fa-arrow-right"
      />
    </button>
  ),
  prevArrow: (
    <button className="slick-arrow slick-prev">
      <i
        style={{ color: 'white', fontSize: '1.5rem' }}
        className="fas fa-arrow-left"
      />
    </button>
  ),
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 0
};

const Container = styled.div`
  padding: 2rem 4rem;
  background-color: #0c0c0c;
  box-sizing: border-box;
  color: #ffffff;
  height: 100%;
`;
const MainContent = styled.div`
  height: 100%;
  filter: blur(0px);
  transition: filter 0.7s;
  &.ABOUT-ACTIVE {
    filter: blur(5px);
  }
`;
const CustomSlider = styled(Slider)`
  height: calc(100% - 5rem);
  .slick-list,
  .slick-track {
    height: 100%;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 35rem;
    }
  }
  .slick-arrow {
    &:before {
      display: none;
    }
    i {
      transition: 0.3s opacity;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
const SlideContainer = styled.div`
  width: 100%;
`;
const SlideInfo = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  h6 {
    margin-top: 0.5rem;
  }
`;
const About = styled.div`
  background: #101010;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  position: absolute;
  bottom: -385px;
  left: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #2d2d2d;
  transition: bottom 0.3s 0s;
  img {
    margin-right: 1rem;
    height: 20rem;
  }
  &.ABOUT-ACTIVE {
    bottom: 0px;
    transition: bottom 0.3s 0.3s;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    bottom: -410px;
    img {
      margin-bottom: 1rem;
    }
  }
`;
const AboutButton = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 1;
  @media (max-width: 767px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const App: React.FC = () => {
  const [isAboutActive, setIsAboutActive] = useState(false);

  return (
    <Container>
      <MainContent className={isAboutActive ? 'ABOUT-ACTIVE' : ''}>
        <h1 style={{ textAlign: 'center' }}>🛋 have a seat</h1>
        <CustomSlider {...SETTINGS}>
          <SlideContainer>
            <img src={LisbonTrainStation} alt="lisbon" />
            <SlideInfo>
              <h3>Lisbon, Portugal 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={MadridParkBench2} alt="lisbon" />
            <SlideInfo>
              <h3>Madrid, Spain 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={ParisTrainStation2} alt="paris train station" />
            <SlideInfo>
              <h3>Paris, France 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={ConeyIsland} alt="coney island" />
            <SlideInfo>
              <h3>Coney Island, New York 2016</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={MadridParkBench} alt="madrid park bench" />
            <SlideInfo>
              <h3>Madrid, Spain 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={LisbonParkBenchOcean} alt="lisbon park bench ocean" />
            <SlideInfo>
              <h3>Lisbon, Portugal 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={KyotoRestaurantBench} alt="kyoto bench" />
            <SlideInfo>
              <h3>Kyoto, Japan 2018</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={Lanzarote} alt="lanzarote bench" />
            <SlideInfo>
              <h3>Lanzarote, Spain 2018</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={LosJardinesLaGranja} alt="la granja" />
            <SlideInfo>
              <h3>La Granja, Spain 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={Mundaka} alt="mundaka" />
            <SlideInfo>
              <h3>Mundaka, Spain 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={MadridRedBench} alt="madrid red bench" />
            <SlideInfo>
              <h3>Madrid, Spain 2017</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={Skiathos} alt="skiathos" />
            <SlideInfo>
              <h3>Skiathos, Greece 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={TokyoSubway} alt="tokyo" />
            <SlideInfo>
              <h3>Tokyo, Japan 2017</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={ToledoTrainStation} alt="toledo" />
            <SlideInfo>
              <h3>Toledo, Spain 2017</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={LisbonParkBench2} alt="lisbon park bench" />
            <SlideInfo>
              <h3>Lisbon, Portugal 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={LisbonOverlookWithBench} alt="lisbon overlook" />
            <SlideInfo>
              <h3>Lisbon, Portugal 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={LisbonParkBench3} alt="lisbon park bench" />
            <SlideInfo>
              <h3>Lisbon, Portugal 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={ParisTrainStation} alt="paris train station" />
            <SlideInfo>
              <h3>Paris, France 2019</h3>
            </SlideInfo>
          </SlideContainer>
          <SlideContainer>
            <img src={ParisTrainStation3} alt="paris train station" />
            <SlideInfo>
              <h3>Paris, France 2019</h3>
            </SlideInfo>
          </SlideContainer>
        </CustomSlider>
      </MainContent>
      <AboutButton onClick={() => setIsAboutActive(!isAboutActive)}>
        <span role="img" aria-label="envelope" style={{ fontSize: '2rem' }}>
          💌
        </span>
      </AboutButton>
      <About className={isAboutActive ? 'ABOUT-ACTIVE' : ''}>
        <img src={AboutImg} alt="about" />
        <div>
          Sina, when the four of us were in Athens together you told me that you
          loved the different personalities of benches from different cities. It
          was our last conversation before Lola and I moved. I decided to make a
          collection of benches from the places we've been to together, places
          from recent adventures, and places I hope you get to visit.
        </div>
      </About>
    </Container>
  );
};

export default App;
