const Nav = () => {
	return (
		<nav>
			<h3 className="logo">YourChef</h3>
			<ul className="links">
				<li
					onClick={() => document.body.scrollIntoView({ behavior: "smooth" })}
				>
					Home
				</li>
				<li
					onClick={() =>
						document
							.querySelector(".works")
							.scrollIntoView({ behavior: "smooth" })
					}
				>
					Works
				</li>
				<li
					onClick={() =>
						document
							.querySelector(".booking")
							.scrollIntoView({ behavior: "smooth" })
					}
				>
					Booking
				</li>
			</ul>

			<div className="burger">
				<div className="top"></div>
				<div className="middle"></div>
				<div className="bottom"></div>
			</div>
		</nav>
	);
};

export default Nav;
