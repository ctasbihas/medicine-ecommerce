"use client";

import { filterMedicines } from "@/utils/FilterMedicines";
import React from "react";
import ProductCard from "./ProductCard";

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

interface ProductsListProps {
	searchTerm: string;
	category: string;
}

const ProductsList: React.FC<ProductsListProps> = ({
	searchTerm,
	category,
}) => {
	const [medicines, setMedicines] = React.useState<Product[]>([]);
	const query = { name: searchTerm, category };

	React.useEffect(() => {
		fetch("/api/products")
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
					{filterMedicines(medicines, query).map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
				{filterMedicines(medicines, query).length === 0 && (
					<div className="flex flex-col items-center justify-center py-20">
						<h2 className="text-2xl font-semibold mb-4">
							No Products Found
						</h2>
						<p className="text-gray-600 text-center w-1/2">
							We could not find any products matching your search.
							Try adjusting your filters or search for something
							else.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductsList;
