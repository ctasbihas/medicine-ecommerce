"use client";
import { Button, Input } from "@nextui-org/react";
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
		<div className="flex justify-center my-8">
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
					endContent={
						<div className="flex items-center">
							<label
								className="sr-only"
								htmlFor="currency"
							>
								Currency
							</label>
							<select
								className="outline-none border-0 bg-transparent text-default-400 text-small"
								id="currency"
								name="currency"
							>
								<option
									value="all"
									defaultChecked
								>
									All
								</option>
								<option value="pain relief">Pain Relief</option>
								<option value="vitamins">
									Vitamins & Supplements
								</option>
								<option value="cold">Cold & Flu</option>
								<option value="digestive health">
									Digestive Health
								</option>
								<option value="skin care">Skin Care</option>
							</select>
						</div>
					}
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
		</div>
	);
};

export default SearchBar;
