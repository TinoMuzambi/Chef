import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<ul className="socials">
				<li>
					<a href="#" target="__blank">
						<FaFacebookF />
					</a>
				</li>
				<li>
					<a href="#" target="__blank">
						<FaInstagram />
					</a>
				</li>
				<li>
					<a href="#" target="__blank">
						<FaTwitter />
					</a>
				</li>
			</ul>
			<p className="rights">Copyright © YourChef 2021</p>
			<a href="https://bit.ly/TinoLinkedIn" target="__blank">
				Built by Tino Muzambi
			</a>
		</footer>
	);
};

export default Footer;
