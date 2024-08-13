"use client";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }: any) => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	useEffect(() => {
		setQuery(window.location.href.split("=")[1].split("%20").join(" "));
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
