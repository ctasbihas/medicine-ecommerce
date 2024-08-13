"use client";

import { Button, Image } from "@nextui-org/react";
import React from "react";
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

const ProductsList = () => {
	const [medicines, setMedicines] = React.useState<Product[]>([]);
	React.useEffect(() => {
		fetch("/data/medicines.json")
			.then((res) => res.json())
			.then(setMedicines);
	}, []);
	return (
		<div className="py-12 bg-gray-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-semibold text-center mb-8">
					Our Medicines
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{medicines.map((product) => (
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
								<p className="text-lg text-gray-800 mb-4">
									${product.price}
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
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
