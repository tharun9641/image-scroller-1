import "../css/home.css";
import pic1 from "../static/City.jpg";
import pic2 from "../static/mountain.jpg";
import pic3 from "../static/nature.jpg";
import pic4 from "../static/ocean.jpg";
import ImageSlider from "./imageSlider";
const HomePage = () => {
  const Images = [pic1, pic2, pic3, pic4];
  return (
    <section>
      <h1>Image - Flex</h1>
      <p> The image expands on hover over the item.</p>
      <section className="home-section">
        <div className="image-container">
          {Images.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="img"></img>
              </div>
            );
          })}
        </div>
      </section>
      <h1>Image slider</h1>
      <p>Image slider similar to a carousel but with arrow and click.</p>
      <div className="image-slider">
        <ImageSlider image={Images} />
      </div>
    </section>
  );
};
export default HomePage;
