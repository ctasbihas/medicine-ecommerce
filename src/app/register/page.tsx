import Input from "@/components/Authentication/Input";
import { Button } from "@nextui-org/react";

const page = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-cyan-500">
			<div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full space-y-6">
				<h2 className="text-3xl font-semibold text-center text-gray-800">
					Create an Account
				</h2>
				<form
					// onSubmit={handleSubmit}
					className="space-y-4"
				>
					<Input
						label="Full Name"
						type="text"
					/>
					<Input
						label="Email"
						type="email"
					/>
					<Input
						label="Password"
						type="password"
					/>
					<Input
						label="Confirm Password"
						type="password"
					/>
					<div>
						<label
							htmlFor="image"
							className="block text-sm font-medium text-gray-700"
						>
							Profile Image
						</label>
						<input
							type="file"
							id="image"
							// onChange={handleImageUpload}
							className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
							accept="image/*"
						/>
					</div>
					<Button
						color="primary"
						variant="shadow"
						fullWidth
						radius="sm"
					>
						Register
					</Button>
				</form>
				<p className="text-center text-sm text-gray-600">
					Already have an account?{" "}
					<a
						href="/login"
						className="text-teal-600 hover:underline"
					>
						Sign In
					</a>
				</p>
			</div>
		</div>
	);
};

export default page;
