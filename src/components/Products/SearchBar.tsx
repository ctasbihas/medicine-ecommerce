"use client";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }: any) => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	useEffect(() => {
		const searchParam = new URLSearchParams(window.location.search).get(
			"search"
		);
		if (searchParam) {
			const decodedQuery = decodeURIComponent(searchParam);
			setQuery(decodedQuery);
		}
	}, []);

	const handleSearch = (e: any) => {
		e.preventDefault();
		router.push(`/products?search=${query}`);
	};

	return (
		<div className="flex justify-between max-w-7xl mx-auto my-8">
			<form
				onSubmit={handleSearch}
				className="flex items-center w-full max-w-lg"
			>
				<Input
					type="text"
					variant="bordered"
					label="Search for medicines..."
					radius="none"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					size="sm"
					className="rounded-l-lg border-r-0"
				/>
				<Button
					variant="solid"
					color="primary"
					radius="none"
					className="px-4 py-6 rounded-r-lg"
					type="submit"
				>
					Search
				</Button>
			</form>
			<div className="flex flex-wrap gap-4">
				<Tabs
					color="primary"
					variant="bordered"
					radius="full"
				>
					<Tab
						key="pain-relief"
						title="Pain Relief"
					/>
					<Tab
						key="supplements"
						title="Supplements"
					/>
					<Tab
						key="cold-flu"
						title="Cold & Flu"
					/>
					<Tab
						key="allergy-relief"
						title="Allergy Relief"
					/>
					<Tab
						key="digestive-health"
						title="Digestive Health"
					/>
					<Tab
						key="skincare"
						title="Skincare"
					/>
				</Tabs>
			</div>
		</div>
	);
};

export default SearchBar;
