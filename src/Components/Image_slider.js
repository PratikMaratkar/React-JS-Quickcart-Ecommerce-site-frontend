import {Carousel} from 'react-bootstrap';
import '../App.css';
import Img1 from '../Images/laptop2.jpg';
import Img2 from '../Images/mobile3.jpg';
import Img3 from '../Images/headphone1.jpg';
import Img4 from '../Images/cam3.jpg';
import Img5 from '../Images/speaker3.jpg';

function Image_slider()
{
    return(
    <div>
      <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
                height="600"
                className="d-block w-100"
                src={Img1}
                alt="First slide" />
                    <Carousel.Caption>
                        <h1 className="prodes">Laptops From Top Brands</h1>
                        <p>Upgrade your daily living with latest laptops!!</p>
                    </Carousel.Caption>          
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
                height="600"
                className="d-block w-100"
                src={Img2}
                alt="Second slide" />
                    <Carousel.Caption>
                        <h1 className="prodes">Latest Smartphones at one click </h1>
                        <p>Upto 40% off on latest Smartphones</p>
                    </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
              <img
                  height="600"
                  className="d-block w-100"
                  src={Img3}
                  alt="Third slide" />
                      <Carousel.Caption>
                          <h1 className="prodes">Best Selling Headphones</h1>
                          <p> Leave The Noise Behind.. </p>
                      </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
              <img
                  height="600"
                  className="d-block w-100"
                  src={Img4}
                  alt="First slide" />
                      <Carousel.Caption>
                          <h1 className="prodes">Wide Range Of Cameras</h1>
                          <p>A Click Of Artistic Joy!!</p>
                      </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
              <img
                  height="600"
                  className="d-block w-100"
                  src={Img5}
                  alt="First slide" />
                      <Carousel.Caption>
                          <h1 className="prodes">Wide variety Of Speakers</h1>
                          <p>Some of the Best-selling Audio Speakers</p>
                      </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

    </div>

    );
}

export default Image_slider;