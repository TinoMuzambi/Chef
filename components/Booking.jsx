const Booking = () => {
	return (
		<section className="booking">
			<div className="form-holder">
				<h1 className="title">Make a Booking</h1>
				<p className="subtitle">Fair Prices, Guaranteed</p>

				<form>
					<input type="text" placeholder="Name" required />
					<input type="email" placeholder="Email" required />
					<input type="tel" placeholder="Phone" />
					<input type="date" placeholder="Booking Date" required />
					<textarea placeholder="Comments" required></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="img-wrapper">
				<img
					src="https://images.unsplash.com/photo-1610851467843-fe4a65aea9c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
					alt="Black male chef"
				/>
			</div>
		</section>
	);
};

export default Booking;
