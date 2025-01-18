
import { CarouselComponent } from "../Components/Carousel";
import Recommended_College from "../Components/Recommended_College";
import Perfect_college from "../Components/Perfect_college";
import Testimonials from "../Components/Testimonials";


const Home = () => {
  return (
    <>
      <CarouselComponent />
      <Perfect_college/>
      <Recommended_College/>
      <Testimonials/>
      
    </>
  );
};

export default Home;
