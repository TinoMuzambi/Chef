import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Works = () => {
	return (
		<section className="works">
			<div className="lead">
				<p className="title">Straight From the Source</p>
				<h2 className="subtitle">YourChef Works</h2>
			</div>
			<div className="carousel">
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={40}
					totalSlides={3}
				>
					<Slider>
						<Slide index={0}>I am the first Slide.</Slide>
						<Slide index={1}>I am the second Slide.</Slide>
						<Slide index={2}>I am the third Slide.</Slide>
					</Slider>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</CarouselProvider>
			</div>
		</section>
	);
};

export default Works;
