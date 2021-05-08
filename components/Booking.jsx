import { useState } from "react";

const Booking = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [date, setDate] = useState("");
	const [comments, setComments] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className="booking">
			<div className="form-holder">
				<h1 className="title">Make a Booking</h1>
				<p className="subtitle">Fair Prices, Guaranteed</p>

				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						type="text"
						placeholder="Name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="tel"
						placeholder="Phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<input
						type="date"
						placeholder="Booking Date"
						required
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
					<textarea
						placeholder="Comments"
						required
						value={comments}
						onChange={(e) => setComments(e.target.value)}
					></textarea>
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
