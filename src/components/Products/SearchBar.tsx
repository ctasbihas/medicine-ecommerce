"use client";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Key, useEffect } from "react";

interface SearchBarProps {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
	category: string;
	setCategory: (category: Key) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchTerm,
	setSearchTerm,
	category,
	setCategory,
}) => {
	const router = useRouter();

	useEffect(() => {
		const searchTerm = new URLSearchParams(window.location.search).get(
			"searchTerm"
		);
		const category = new URLSearchParams(window.location.search).get(
			"category"
		);
		if (searchTerm) {
			const decodedSearch = decodeURIComponent(searchTerm);
			setSearchTerm(decodedSearch);
		}
		if (category) {
			const decodedCategory = decodeURIComponent(category);
			setCategory(decodedCategory);
		}
	}, [setSearchTerm, setCategory]);

	const handleSearch = (e: any) => {
		e.preventDefault();
		router.push(`/products?searchTerm=${searchTerm}&category=${category}`);
	};

	return (
		<div className="flex justify-between max-w-7xl mx-auto my-8">
			<form
				onSubmit={handleSearch}
				className="flex items-center justify-between w-full"
			>
				<div className="flex flex-wrap gap-4">
					<Tabs
						color="primary"
						variant="bordered"
						radius="full"
						selectedKey={category}
						onSelectionChange={setCategory}
					>
						<Tab
							key="All"
							title="All"
						/>
						<Tab
							key="Pain Relief"
							title="Pain Relief"
						/>
						<Tab
							key="Supplements"
							title="Supplements"
						/>
						<Tab
							key="Cold & Flu"
							title="Cold & Flu"
						/>
						<Tab
							key="Allergy Relief"
							title="Allergy Relief"
						/>
						<Tab
							key="Digestive Health"
							title="Digestive Health"
						/>
						<Tab
							key="Skincare"
							title="Skincare"
						/>
					</Tabs>
				</div>
				<div className="flex items-center w-full max-w-lg">
					<Input
						type="text"
						variant="bordered"
						label="Search for medicines..."
						radius="none"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
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
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
