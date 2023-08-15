import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <Carousel>
      <div>
        <img src="/assets/1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/assets/2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
}

export default App;
