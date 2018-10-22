import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<title>Akshay Upadhya</title>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
