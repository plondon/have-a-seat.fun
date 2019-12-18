import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// Import photos
import LisbonBusStop from './images/Lisbon Bus Stop, 2019.jpg';
import LisbonOverlookWithBench from './images/Lisbon Overlook with Bench, 2019.jpg';
import LisbonParkBench from './images/Lisbon Park Bench, 2019.jpg';
import LisbonParkBench2 from './images/Lisbon Park Bench 2, 2019.jpg';
import LisbonParkBench3 from './images/Lisbon Park Bench 3, 2019.jpg';
import LisbonParkBench4 from './images/Lisbon Park Bench 4, 2019.jpg';
import LisbonParkBenchBridge from './images/Lisbon Park Bench with Bridge, 2019.jpg';
import LisbonParkBenchOcean from './images/Lisbon Park Bench by the Ocean, 2019.jpg';
import LisbonTrainStation from './images/Lisbon Train Station, 2019.jpg';
import ParisTrainStation from './images/Paris Train Station, 2019.jpg';
import ParisTrainStation2 from './images/Paris Train Station 2, 2019.jpg';
import ParisTrainStation3 from './images/Paris Train Station 3, 2019.jpg';

const SETTINGS = {
  dots: true,
  infinite: true,
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
      max-height: 30rem;
    }
  }
  .slick-dots {
    bottom: 0;
  }
  .slick-dots button {
    height: 1rem;
    width: 1rem;
    &:before {
      font-size: 0.65rem;
      width: 100%;
      height: 100%;
      color: white !important;
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

const App: React.FC = () => {
  return (
    <Container>
      <h1>🛋 Have a Seat</h1>
      <CustomSlider {...SETTINGS}>
        <SlideContainer>
          <img src={LisbonTrainStation} alt="lisbon" />
          <SlideInfo>
            <h3>Lisbon Train Station</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonParkBench} alt="lisbon" />
          <SlideInfo>
            <h3>Lisbon Park Bench</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonBusStop} alt="lisbon bus stop" />
          <SlideInfo>
            <h3>Lisbon Bus Stop</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonOverlookWithBench} alt="lisbon overlook" />
          <SlideInfo>
            <h3>Lisbon Overlook with Bench</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonParkBench2} alt="lisbon park bench" />
          <SlideInfo>
            <h3>Lisbon Park Bench</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonParkBench3} alt="lisbon park bench" />
          <SlideInfo>
            <h3>Lisbon Park Bench</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonParkBench4} alt="lisbon park bench" />
          <SlideInfo>
            <h3>Lisbon Park Bench</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        {/* <SlideContainer>
          <img src={LisbonParkBenchBridge} alt="lisbon park bench bridge" />
          <SlideInfo>
            <h3>Lisbon Park Bench with Bridge</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer> */}
        <SlideContainer>
          <img src={LisbonParkBenchOcean} alt="lisbon park bench ocean" />
          <SlideInfo>
            <h3>Lisbon Park Bench by the Ocean</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={ParisTrainStation} alt="paris train station" />
          <SlideInfo>
            <h3>Paris Train Station</h3>
            <h6>Paris, France 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={ParisTrainStation2} alt="paris train station" />
          <SlideInfo>
            <h3>Paris Train Station</h3>
            <h6>Paris, France 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={ParisTrainStation3} alt="paris train station" />
          <SlideInfo>
            <h3>Paris Train Station</h3>
            <h6>Paris, France 2019</h6>
          </SlideInfo>
        </SlideContainer>
      </CustomSlider>
    </Container>
  );
};

export default App;
