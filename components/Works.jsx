import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "pure-react-carousel/dist/react-carousel.es.css";
import works from "../data/works";

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
					totalSlides={works.length}
				>
					<Slider>
						{works.map((work) => (
							<Slide index={work.id} key={work.id}>
								<div className="work">
									<img src={work.image} alt={work.title} />
									<div className="text">
										<h3 className="title">{work.title}</h3>
										<p className="serving">{work.serving}</p>
									</div>
								</div>
							</Slide>
						))}
					</Slider>
					<ButtonBack>
						<BsChevronLeft />
					</ButtonBack>
					<ButtonNext>
						<BsChevronRight />
					</ButtonNext>
				</CarouselProvider>
			</div>
		</section>
	);
};

export default Works;
