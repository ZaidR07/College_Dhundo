import { Carousel } from "flowbite-react";

const Recommended_College = () => {
  return (
    <div className="mt-24 size-full">
      <p className="mb-6 text-center text-4xl">
        Top Colleges Recommended For You
      </p>
      <div className="m-auto h-[35vh] w-[35%] ">
        <Carousel slide={false}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8yqMAfQXZ6s?si=6AjwehpylVs9Zf9a&amp;start=3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2FQhDfYXhPs?si=kuGRkDqxuZYB7_xK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xILHz5LP7Kg?si=z_Nw7KJxfC9LMARP&amp;start=10"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BgXaxIogQcU?si=m_JaNzm6YiXtbva5&amp;start=3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rNBrPWebcZo?si=6S51R5gu8CUxPZB9&amp;start=10"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Carousel>
      </div>
    </div>
  );
};

export default Recommended_College;
