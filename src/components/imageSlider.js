import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";
import "../css/imageslider.css";

const ImageSlider = (props) => {
  const [getindex, setindex] = useState(0);
  const { image } = props;

  const Shownext = () => {
    console.log(getindex);
    setindex((index) => {
      if (index === image.length - 1) return 0;
      return index + 1;
    });
  };

  const Showprev = () => {
    console.log(getindex);
    setindex((index) => {
      if (index === 0) return image.length - 1;
      return index - 1;
    });
  };
  return (
    <section className="slider-section">
      <div style={{ width: "100%", display: "flex" }}>
        {image.map((item) => (
          <img
            key={item}
            src={image[getindex]}
            //src ={item} -- doesn't work -- index values get changed and yet images doesn't change
            alt="img"
            className="img-slider-img "></img>
        ))}
      </div>

      <div>
        <button
          className="img-slider-btn"
          style={{ left: 0 }}
          onClick={Shownext}>
          <ArrowBigLeft />
        </button>
        <button
          className="img-slider-btn"
          style={{ right: 0 }}
          onClick={Showprev}>
          <ArrowBigRight />
        </button>
      </div>
    </section>
  );
};
export default ImageSlider;
