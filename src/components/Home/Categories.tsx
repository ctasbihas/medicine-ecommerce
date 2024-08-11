// components/CategoriesSection.js
import Image from "next/image";
import Link from "next/link";

const categories = [
	{ id: 1, name: "Pain Relief", image: "/path-to-pain-relief-image.jpg" },
	{ id: 2, name: "Vitamins", image: "/path-to-vitamins-image.jpg" },
	{ id: 3, name: "Cough & Cold", image: "/path-to-cough-cold-image.jpg" },
	{ id: 4, name: "Diabetes Care", image: "/path-to-diabetes-care-image.jpg" },
	{ id: 5, name: "Heart Health", image: "/path-to-heart-health-image.jpg" },
	{ id: 6, name: "Skin Care", image: "/path-to-skin-care-image.jpg" },
];

const Categories = () => {
	return (
		<section className="py-12 max-w-7xl mx-auto">
			<h2 className="text-3xl font-bold mb-8 text-gray-800">
				Shop by Category
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category) => (
					<Link
						key={category.id}
						href={`/category/${category.id}`}
						className="group relative block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<Image
							src={category.image}
							alt={category.name}
							width={300}
							height={200}
							className="w-full h-40 object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<span className="text-white text-lg font-semibold">
								{category.name}
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Categories;
