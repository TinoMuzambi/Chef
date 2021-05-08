import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import works from "../data/works";

const Works = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section className="works">
			<div className="lead">
				<p className="title">Straight From the Source</p>
				<h2 className="subtitle">YourChef Works</h2>
			</div>
			<div className="carousel-wrapper">
				<Slider {...settings}>
					{works.map((work) => (
						<div className="work" key={work.id}>
							<img src={work.image} alt={work.title} />
							<div className="text">
								<h3 className="title">{work.title}</h3>
								<p className="serving">{work.serving}</p>
							</div>
						</div>
					))}
				</Slider>
				{/* <ButtonBack className="left">
						<BsChevronLeft />
					</ButtonBack>
					<ButtonNext className="right">
						<BsChevronRight />
					</ButtonNext>
					<DotGroup className="dots" showAsSelectedForCurrentSlideOnly={true} /> */}
			</div>
		</section>
	);
};

export default Works;
