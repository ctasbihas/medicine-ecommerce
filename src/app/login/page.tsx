import Input from "@/components/Authentication/Input";
import { Button } from "@nextui-org/react";

const page = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-cyan-500">
			<div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full space-y-6">
				<h2 className="text-3xl font-semibold text-center text-gray-800">
					Welcome Back
				</h2>
				<form
					// onSubmit={handleSubmit}
					className="space-y-4"
				>
					<Input
						label="Email"
						type="email"
						autoFocus
					/>
					<Input
						label="Password"
						type="password"
					/>
					<Button
						color="primary"
						variant="shadow"
						fullWidth
						radius="sm"
					>
						Login
					</Button>
				</form>
				<p className="text-center text-sm text-gray-600">
					New to MedZ?{" "}
					<a
						href="/register"
						className="text-teal-600 hover:underline"
					>
						Register
					</a>
				</p>
			</div>
		</div>
	);
};

export default page;
