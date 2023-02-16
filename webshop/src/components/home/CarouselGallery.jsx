import Carousel from 'react-bootstrap/Carousel';
import "../../css/Homepage.css";

function CarouselGallery() {
    return (
        <Carousel id="carousel" >

            <Carousel.Item id="carouselxx">
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/43/8f/43/438f4324c59cd8bbe15bfd81185b0cf0.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to MilyGear</h3>
                    <p>This is just a dummy website where I practice coding</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item id="carouselxx">
                <img
                    className="d-block w-100"
                    src="https://live.staticflickr.com/4562/24044192737_5a4d037ab9_b.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>This is only for coding practice not design </h3>
                    <p>Trust me bro!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item id="carouselxx">
                <img
                    className="d-block w-100"
                    src="https://www.thedefensepost.com/wp-content/uploads/2022/12/20150512_150512a-002-1024x582.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Payment function is also dummy</h3>
                    <p>
                        It works, try buying something
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselGallery