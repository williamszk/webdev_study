function Footer() {
	const author = "William Suzuki";
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>Created by {author}</p>
			<p>© Copyright {currentYear}</p>
		</footer>
	);
}

export default Footer;
