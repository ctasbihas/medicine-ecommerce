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

export const filterMedicines = (medicines: Product[], query: any) => {
	const filteredMedicines = medicines.filter((medicine: any) => {
		if (!query.name && query.category !== "All") {
			return medicine.category
				.toLowerCase()
				.includes(query.category.toLowerCase());
		}
		if (!query.name && query.category === "All") {
			return medicine;
		}

		if (query.name && query.category !== "All") {
			return (
				medicine.name
					.toLowerCase()
					.includes(query.name.toLowerCase()) &&
				medicine.category
					.toLowerCase()
					.includes(query.category.toLowerCase())
			);
		}

		if (query.name) {
			return medicine.name
				.toLowerCase()
				.includes(query.name.toLowerCase());
		}

		if (query.category) {
			return medicine.category
				.toLowerCase()
				.includes(query.category.toLowerCase());
		}

		return medicine;
	});

	return filteredMedicines;
};
