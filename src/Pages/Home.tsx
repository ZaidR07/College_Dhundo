import { Navigationbar } from "../Components/Navigationbar";
import { CarouselComponent } from "../Components/Carousel";
import Recommended_College from "../Components/Recommended_College";
import Perfect_college from "../Components/Perfect_college";


const Home = () => {
  return (
    <>
      <Navigationbar />
      <CarouselComponent />
      <Perfect_college/>
      <Recommended_College/>
      
    </>
  );
};

export default Home;
