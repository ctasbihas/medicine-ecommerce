import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-10">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div>
						<h4 className="text-white text-lg font-semibold mb-4">
							Important Links
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/about"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="/privacy-policy"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-white text-lg font-semibold mb-4">
							Follow Us
						</h4>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								className="text-gray-300 hover:text-blue-500 transition-colors"
							>
								<FaFacebookF size={24} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								className="text-gray-300 hover:text-blue-400 transition-colors"
							>
								<FaTwitter size={24} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								className="text-gray-300 hover:text-pink-500 transition-colors"
							>
								<FaInstagram size={24} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								className="text-gray-300 hover:text-blue-600 transition-colors"
							>
								<FaLinkedinIn size={24} />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-white text-lg font-semibold mb-4">
							Subscribe to our Newsletter
						</h4>
						<form className="flex">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border-none rounded-l-lg focus:outline-none"
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500 transition-colors"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className="text-center mt-10">
					<p className="text-gray-500">
						&copy; {new Date().getFullYear()} MedZ. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
