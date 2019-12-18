import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Import css files
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// Import photos
import ConeyIsland from './images/Coney Island, 2016.jpg';
import KyotoRestaurantBench from './images/Kyoto Restaurant Bench, 2018.jpg';
import Lanzarote from './images/Lanzarote, 2018.jpg';
import LisbonBusStop from './images/Lisbon Bus Stop, 2019.jpg';
import LisbonOverlookWithBench from './images/Lisbon Overlook with Bench, 2019.jpg';
import LisbonParkBench from './images/Lisbon Park Bench, 2019.jpg';
import LisbonParkBench2 from './images/Lisbon Park Bench 2, 2019.jpg';
import LisbonParkBench3 from './images/Lisbon Park Bench 3, 2019.jpg';
import LisbonParkBench4 from './images/Lisbon Park Bench 4, 2019.jpg';
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
      max-height: 35rem;
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
      <h1 style={{ textAlign: 'center' }}>🛋 have a seat</h1>
      <CustomSlider {...SETTINGS}>
        <SlideContainer>
          <img src={LisbonTrainStation} alt="lisbon" />
          <SlideInfo>
            <h3>Lisbon Train Station</h3>
            <h6>Lisbon, Portugal 2019</h6>
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
          <img src={MadridParkBench2} alt="lisbon" />
          <SlideInfo>
            <h3>Madrid Park Bench</h3>
            <h6>Madrid, Spain 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={ConeyIsland} alt="coney island" />
          <SlideInfo>
            <h3>Coney Island</h3>
            <h6>Coney Island, New York 2016</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={MadridParkBench} alt="madrid park bench" />
          <SlideInfo>
            <h3>Madrid Park Bench</h3>
            <h6>Madrid, Spain 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LisbonParkBenchOcean} alt="lisbon park bench ocean" />
          <SlideInfo>
            <h3>Lisbon Park Bench by the Ocean</h3>
            <h6>Lisbon, Portugal 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={KyotoRestaurantBench} alt="kyoto bench" />
          <SlideInfo>
            <h3>Kyoto Restaurant Bench</h3>
            <h6>Kyoto, Japan 2018</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={Lanzarote} alt="lanzarote bench" />
          <SlideInfo>
            <h3>Césear Manrique House</h3>
            <h6>Lanzarote, Spain 2018</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={LosJardinesLaGranja} alt="la granja" />
          <SlideInfo>
            <h3>Los Jardines de La Granja San Ildefonso</h3>
            <h6>La Granja, Spain 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={Mundaka} alt="mundaka" />
          <SlideInfo>
            <h3>Mundaka</h3>
            <h6>Mundaka, Spain 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={MadridRedBench} alt="madrid red bench" />
          <SlideInfo>
            <h3>Madrid Red Bench</h3>
            <h6>Madrid, Spain 2017</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={Skiathos} alt="madrid park bench 2" />
          <SlideInfo>
            <h3>Madrid Park Bench</h3>
            <h6>Madrid, Spain 2019</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={TokyoSubway} alt="madrid red bench" />
          <SlideInfo>
            <h3>Madrid Red Bench</h3>
            <h6>Madrid, Spain 2017</h6>
          </SlideInfo>
        </SlideContainer>
        <SlideContainer>
          <img src={ToledoTrainStation} alt="mundaka" />
          <SlideInfo>
            <h3>Mundaka</h3>
            <h6>Mundaka, Spain 2019</h6>
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
          <img src={LisbonParkBench2} alt="lisbon park bench" />
          <SlideInfo>
            <h3>Lisbon Park Bench</h3>
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
        <SlideContainer>
          <img src={ParisTrainStation} alt="paris train station" />
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
