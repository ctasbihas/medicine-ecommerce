import { Button, Image } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	category: string;
	brand: string;
	description: string;
	rating: number;
	stock: number;
}

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<div
			key={product.id}
			className="bg-white shadow-lg rounded-lg"
		>
			<Image
				src="https://th.bing.com/th/id/OIP.AxkND3cBoNcQE9cg6mi2RwHaHa"
				alt={product.name}
				width={300}
				height={200}
				loading="lazy"
				className="w-full h-40 object-contain"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2 line-clamp-1">
					{product.name}
				</h3>
				<p className="text-lg text-gray-800 mb-4">${product.price}</p>
				<p className="text-base text-gray-800">
					For {product.category}
				</p>

				<p className="text-gray-500 mb-4 line-clamp-3">
					{product.description}
				</p>
				<Button
					color="primary"
					fullWidth
					radius="sm"
					endContent={<FaShoppingCart />}
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
