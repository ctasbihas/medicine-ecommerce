import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-white shadow-md sticky top-0 w-full z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo Section */}
				<div className="flex items-center">
					<Image
						src="/assets/logo.png"
						alt="Logo"
						width={100}
						height={40}
					/>
				</div>
				{/* Navigation Links */}
				<div className="flex space-x-8">
					<Link
						href="/"
						className="relative text-gray-800 font-bold transition-colors duration-200 ease-in-out group"
					>
						Home
						<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						href="/products"
						className="relative text-gray-800 font-bold transition-colors duration-200 ease-in-out group"
					>
						Products
						<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						href="/cart"
						className="relative text-gray-800 font-bold transition-colors duration-200 ease-in-out group"
					>
						Cart
						<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						href="/login"
						className="relative text-gray-800 font-bold transition-colors duration-200 ease-in-out group"
					>
						Login
						<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
