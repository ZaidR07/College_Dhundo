import { useRef } from "react";
import { TestimonialsList } from "../Constants/testimonials";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      // Calculate scroll value based on screen width
      if (window.innerWidth > 350 && window.innerWidth < 480) {
        const scrollValue = (window.innerWidth * 0.8 * 66.6) / 100;

        scrollRef.current.scrollBy({ left: -scrollValue, behavior: "smooth" });
      }

      if (window.innerWidth > 750 && window.innerWidth < 1050) {
        const scrollValue = window.innerWidth * 0.85;

        scrollRef.current.scrollBy({ left: -scrollValue, behavior: "smooth" });
      }
      // Adjust this proportion as needed
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      if (window.innerWidth > 350 && window.innerWidth < 500) {
        const scrollValue = (window.innerWidth * 0.8 * 65.5) / 100; // Adjust this proportion as needed
        scrollRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
      }
      if (window.innerWidth > 750 && window.innerWidth < 1050) {
        const scrollValue = window.innerWidth * 0.85;

        scrollRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <h1 className="mt-12 text-center text-xl font-semibold text-[#155E75] md:text-3xl">
        Testimonials
      </h1>
      <section className="mb-12 mt-4 flex  w-full items-center justify-between gap-[1%] px-[1%]">
        {/* Left Arrow */}
        <button
          className="grid size-[40px] items-center justify-center rounded-full"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            fill="#155E75"
          >
            <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22v72h288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v72c0 9.6-5.7 18.2-14.5 22z" />
          </svg>
        </button>

        {/* Scrollable Testimonials Container */}
        <div
          ref={scrollRef}
          // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
          className="relative flex w-[80%] space-x-[2%] overflow-hidden scroll-smooth sm:w-[85%] "
        >
          {TestimonialsList &&
            TestimonialsList.length > 0 &&
            TestimonialsList.map((item, index) => (
              <div
                key={index}
                className="flex h-40 w-[66.67%] shrink-0 flex-col justify-evenly rounded-lg bg-[#155E75] px-[5%] md:w-[49%]"
              >
                <p className="text-justify text-xs text-white lg:text-base">
                  {item.quote}
                </p>
                <p className="text-xs text-yellow-300 lg:text-lg">{`-- ${item.name}`}</p>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          className="grid size-[40px] items-center justify-center rounded-full "
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            fill="#155E75"
          >
            <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288v72c0 9.6 5.7 18.2 14.5 22z" />
          </svg>
        </button>
      </section>
    </>
  );
};

export default Testimonials;
