

import { Carousel } from "flowbite-react";
import { image1 , image2 , image3 , image4 , image5 } from "../Constants/media.ts";


export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-[80vh] ">
      <Carousel pauseOnHover>
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
        <img src={image3} alt="..." />
        <img src={image4} alt="..." />
        <img src={image5} alt="..." />
      </Carousel>
    </div>
  );
}
