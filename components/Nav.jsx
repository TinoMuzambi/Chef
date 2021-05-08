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
				<li>Works</li>
				<li>Booking</li>
			</ul>
		</nav>
	);
};

export default Nav;
