import { useRef } from "react";

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      // Calculate scroll value based on screen width
      if(window.innerWidth > 350 && window.innerWidth < 480){
      const scrollValue = window.innerWidth * 0.75;

      scrollRef.current.scrollBy({ left: -scrollValue, behavior: "smooth" });

      }
      
      
      
      if(window.innerWidth > 750 && window.innerWidth < 790){
      const scrollValue = window.innerWidth * 0.85;

      scrollRef.current.scrollBy({ left: -scrollValue, behavior: "smooth" });
        
      }
      // Adjust this proportion as needed
    }
  };
  

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollValue = window.innerWidth * 0.75; // Adjust this proportion as needed
      scrollRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-12 flex h-[40vh] w-full items-center bg-yellow-50 gap-[2.5%] px-[2.5%]">
      {/* Left Arrow */}
      <button
        className="grid size-[40px] items-center justify-center rounded-full bg-cyan-100"
        onClick={scrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} fill="#155E75">
          <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22z" />
        </svg>
      </button>

      {/* Scrollable Testimonials Container */}
      <div
        ref={scrollRef}
        className="relative flex w-[75%] sm:w-[85%] space-x-[5%] overflow-hidden scroll-smooth"
      >
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 1</div>
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 2</div>
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 3</div>
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 4</div>
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 5</div>
        <div className="w-[47.5%] h-32 shrink-0 bg-blue-500">Box 6</div>
      </div>

      {/* Right Arrow */}
      <button
        className="grid size-[40px] items-center justify-center rounded-full bg-cyan-100"
        onClick={scrollRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} fill="#155E75">
          <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22z" />
        </svg>
      </button>
    </section>
  );
};

export default Testimonials;
