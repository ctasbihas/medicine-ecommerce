"use client";

import { Input as NextInput } from "@nextui-org/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Input = ({ label, type }: { label: string; type: string }) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<NextInput
			label={label}
			variant="underlined"
			autoFocus={label === "Full Name"}
			style={{ borderColor: "red" }}
			endContent={
				type === "password" ? (
					<button
						className="focus:outline-none"
						type="button"
						onClick={toggleVisibility}
						aria-label="toggle password visibility"
					>
						{isVisible ? (
							<FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
						) : (
							<FaEye className="text-2xl text-default-400 pointer-events-none" />
						)}
					</button>
				) : type === "email" ? (
					<IoMail className="text-2xl text-default-400 pointer-events-none" />
				) : null
			}
			type={
				type === "password" ? (isVisible ? "text" : "password") : type
			}
		/>
	);
};
export default Input;
