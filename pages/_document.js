import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" prefix="og: http://ogp.me/ns#">
				<Head>
					<script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
					></script>

					<script
						dangerouslySetInnerHTML={{
							__html: `
							(function () {
								emailjs.init("insert token");
							})();`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
