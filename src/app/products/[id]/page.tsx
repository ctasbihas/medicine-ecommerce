import Swiper from "@/components/Products/Swiper";
import { Button, Image } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";

const page = ({ params }: { params: { id: string } }) => {
	const medicine = {
		id: 18,
		name: "Aveeno Daily Moisturizing Lotion",
		image: "https://th.bing.com/th?id=OIP.uSh8JpS6m3YRdV2SFl5AiQHaFs",
		price: 9.99,
		category: "Skincare",
		brand: "Aveeno",
		description:
			"Aveeno Daily Moisturizing Lotion for smooth, hydrated, and healthy skin.",
		rating: 4.8,
		stock: 120,
	};

	return (
		<section className="flex items-center w-full h-[80vh] max-w-7xl mx-auto pt-5">
			<div className="w-1/2">
				<Image
					src={medicine.image}
					alt={medicine.name}
					className="w-full"
				/>
			</div>
			<div>
				<h1 className="text-2xl font-bold">{medicine.name}</h1>
				<p className="text-gray-500">{medicine.description}</p>
				<p className="text-lg font-bold">${medicine.price}</p>
				<p className="text-gray-500">Category: {medicine.category}</p>
				<p className="text-gray-500">Brand: {medicine.brand}</p>
				<p className="text-gray-500">Rating: {medicine.rating}</p>
				<p className="text-gray-500">Stock: {medicine.stock}</p>
				<div className="mt-5 space-x-5">
					<Button
						size="lg"
						color="primary"
						radius="sm"
					>
						Buy Now
					</Button>
					<Button
						size="lg"
						className="bg-gray-500 text-white"
						radius="sm"
					>
						Add to Cart <FaShoppingCart size={24} />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default page;
