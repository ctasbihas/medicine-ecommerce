import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Promotions from "@/components/Home/Promotions";

const Home = () => {
	return (
		<div className="">
			<Banner />
			<FeaturedProducts />
			<Categories />
			<Promotions />
		</div>
	);
};

export default Home;
