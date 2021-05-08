import { useState } from "react";

const Nav = () => {
	const [active, setActive] = useState(false);

	return (
		<nav className={`${active ? "active" : ""}`}>
			<h3 className="logo">YourChef</h3>
			<ul className="links">
				<li
					onClick={() => {
						setActive(false);
						document.body.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Home
				</li>
				<li
					onClick={() => {
						setActive(false);
						document
							.querySelector(".works")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Works
				</li>
				<li
					onClick={() => {
						setActive(false);
						document
							.querySelector(".booking")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Booking
				</li>
			</ul>

			<div
				className={`burger ${active ? "active" : ""}`}
				onClick={() => setActive(!active)}
			>
				<div className="top"></div>
				<div className="middle"></div>
				<div className="bottom"></div>
			</div>
		</nav>
	);
};

export default Nav;
