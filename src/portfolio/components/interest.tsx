import React from "react";
import phil from "../assets/philosophy.jpg";
import web3 from "../assets/web3.jpeg";
import art from "../assets/art.jpg";
import Typical from "react-typical";

const images = [phil, web3, art];

const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",

      block: "nearest",

      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="p-12 flex justify-center w-screen max-w-4xl md:w-full items-center mx-2">
      <div className="relative w-full ">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain " alt={"sdf"} />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

//APP Component
class Interests extends React.Component {
  render() {
    return (
      <div className="bg-black py-11 px-4 pt-60 pb-60 ">
        <p
          id="interests"
          className="text-right text-4xl font-mono text-white p-4 px-10  "
        >
          <Typical
            steps={["", 1000, "My", 1000, "My Interests", 1000]}
            loop={1}
            wrapper="p"
          />
        </p>
        <div className="flex justify-center   ">
          <div className=" bg-white mx-2  shadow-lg m-3 rounded-3xl ">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;
