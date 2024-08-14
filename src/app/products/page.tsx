"use client";

import ProductsList from "@/components/Products/ProductsList";
import SearchBar from "@/components/Products/SearchBar";
import { useState } from "react";

const Products = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [category, setCategory] = useState<any>("");
	return (
		<main>
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				category={category}
				setCategory={setCategory}
			/>
			<ProductsList
				searchTerm={searchTerm}
				category={category}
			/>
		</main>
	);
};

export default Products;
