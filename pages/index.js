import Head from "next/head";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

const keywords = "chef, private chef, cook, recipes, business, catering";
const title = "Your Chef";
const description = "Your one stop for all your chef needs.";
const image =
	"https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80";
const url = "https://chef.vercel.app/";

const Home = () => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />

			{/* <!-- Google / Search Engine Tags --> */}
			<meta itemProp="name" content={title} />
			<meta itemProp="description" content={description} />
			<meta itemProp="image" content={image} />

			{/* <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="Elle Zeka"
				content="People buy with their eyes, we worry about what they see."
			/>
			<link rel="apple-touch-icon" href="/logo192.png" />
			<link rel="manifest" href="/manifest.json" />
			<title>{title}</title>

			{/* AOS Library */}
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
				integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
				crossOrigin="anonymous"
			/>

			{/* Mapbox Library */}
			<link
				href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
				rel="stylesheet"
			/>

			<link rel="preconnect" href="https://api.storyblok.com" />
			<link rel="preconnect" href="https://a.storyblok.com" />
			<link rel="preconnect" href="https://www.google-analytics.com" />
			<link rel="preconnect" href="https://www.api.mapbox.com" />
			<link rel="preconnect" href="https://www.mapbox.com" />
		</Head>
		<Nav />
		<Hero />
	</>
);

export default Home;
