// components/PromotionsSection.js
import { Image } from "@nextui-org/react";
import Link from "next/link";

const promotions = [
	{
		id: 1,
		title: "20% Off on All Pain Relief Medicines",
		description:
			"Get relief from pain with a 20% discount on all pain relief products.",
		image: "/path-to-pain-relief-promo-image.jpg",
		link: "/category/pain-relief",
	},
	{
		id: 2,
		title: "Buy 1 Get 1 Free on Vitamins",
		description:
			"Boost your immunity with our special Buy 1 Get 1 Free offer on selected vitamins.",
		image: "/path-to-vitamins-promo-image.jpg",
		link: "/category/vitamins",
	},
	{
		id: 3,
		title: "Up to 30% Off on Diabetes Care",
		description:
			"Manage your diabetes with up to 30% off on all diabetes care products.",
		image: "/path-to-diabetes-care-promo-image.jpg",
		link: "/category/diabetes-care",
	},
	// Add more promotions as needed
];

const Promotions = () => {
	return (
		<section className="py-12 bg-gray-100 text-gray-800">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">Current Promotions</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{promotions.map((promo) => (
						<Link
							key={promo.id}
							href={promo.link}
							className="group relative block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
						>
							<Image
								src={promo.image}
								alt={promo.title}
								className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
								<div className="text-center px-4">
									<h3 className="text-xl font-semibold mb-2 text-white">
										{promo.title}
									</h3>
									<p className="text-base text-white">
										{promo.description}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Promotions;
