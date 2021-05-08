const Booking = () => {
	return (
		<section className="booking">
			<div className="form-holder">
				<h1 className="title">Make a Booking</h1>
				<p className="subtitle">Fair Prices, Guaranteed</p>

				<form>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="tel" placeholder="Phone" />
					<input type="date" placeholder="Booking Date" />
					<textarea placeholder="Comments"></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
			<img
				src="https://images.unsplash.com/photo-1596529258120-29aec0ce4d63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1532&q=80"
				alt="Black male chef"
			/>
		</section>
	);
};

export default Booking;
