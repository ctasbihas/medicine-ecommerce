"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
	{
		id: 1,
		name: "Paracetamol 500mg",
		company: "Acme Laboratories Ltd.",
		price: "$2.50",
		image: "/path-to-image1.jpg",
	},
	{
		id: 2,
		name: "Ibuprofen 400mg",
		company: "Square Pharmaceuticals Ltd.",
		price: "$3.00",
		image: "/path-to-image2.jpg",
	},
	{
		id: 3,
		name: "Cefuroxime 500mg",
		company: "Renata Limited",
		price: "$7.50",
		image: "/path-to-image3.jpg",
	},
	{
		id: 4,
		name: "Azithromycin 250mg",
		company: "Beximco Pharmaceuticals Ltd.",
		price: "$5.50",
		image: "/path-to-image4.jpg",
	},
	{
		id: 5,
		name: "Amoxicillin 500mg",
		company: "Eskayef Pharmaceuticals Ltd.",
		price: "$4.00",
		image: "/path-to-image5.jpg",
	},
	{
		id: 6,
		name: "Metformin 500mg",
		company: "Incepta Pharmaceuticals Ltd.",
		price: "$2.75",
		image: "/path-to-image6.jpg",
	},
	{
		id: 7,
		name: "Loratadine 10mg",
		company: "ACI Limited",
		price: "$1.50",
		image: "/path-to-image7.jpg",
	},
	{
		id: 8,
		name: "Atorvastatin 20mg",
		company: "Aristopharma Ltd.",
		price: "$8.00",
		image: "/path-to-image8.jpg",
	},
	{
		id: 9,
		name: "Amlodipine 5mg",
		company: "Opsonin Pharma Ltd.",
		price: "$3.25",
		image: "/path-to-image9.jpg",
	},
	{
		id: 10,
		name: "Pantoprazole 40mg",
		company: "Radiant Pharmaceuticals Ltd.",
		price: "$4.50",
		image: "/path-to-image10.jpg",
	},
];

const FeaturedProducts = () => {
	return (
		<section className="py-12 max-w-7xl mx-auto">
			<h2 className="text-3xl font-bold mb-6">Featured Products</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={4}
				navigation
				autoplay={{ delay: 3000 }}
			>
				{products.map((product) => (
					<SwiperSlide
						key={product.id}
						className="bg-white rounded-lg text-center hover:shadow-2xl transition-all duration-300 pb-2"
					>
						<Image
							src={product.image}
							alt={product.name}
							width={300}
							height={200}
							className="w-full h-40 object-cover mb-4 rounded-t-lg bg-red-500"
						/>
						<h3 className="text-xl font-semibold mb-2">
							{product.name}
						</h3>
						<p className="text-lg text-gray-600 mb-4">
							{product.price}
						</p>
						<Link
							href={`/product/${product.id}`}
							className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-all"
						>
							View Details
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default FeaturedProducts;
