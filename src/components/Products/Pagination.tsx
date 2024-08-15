import { Pagination as NextPagination } from "@nextui-org/react";

const Pagination = () => {
	return (
		<div className="flex justify-end mb-5">
			<NextPagination
				isCompact
				showControls
				total={10}
				initialPage={1}
			/>
		</div>
	);
};

export default Pagination;
