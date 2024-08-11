import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<section className="bg-[#304D30] text-white">
			<div className="flex justify-between max-w-7xl mx-auto h-[75vh]">
				<div className="flex flex-col items-start justify-center p-5 w-2/4">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Your Prescription for Affordable Health Solutions!
					</h1>
					<p className="text-lg mb-6">
						Elevate your health journey with exclusive discounts and
						unparalleled convenience. Your path to well-being starts
						here, where every purchase is a prescription for
						savings.
					</p>
					<Link
						href="/shop"
						className="bg-white text-[#28A745] font-bold py-3 px-6 rounded-lg shadow-md"
					>
						Start Shopping
					</Link>
				</div>
				<Image
					src="/assets/banner-image.png"
					alt="Background"
					width={550}
					height={1000}
				/>
			</div>
		</section>
	);
};

export default Banner;
