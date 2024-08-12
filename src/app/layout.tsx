import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MedZ - Your Trusted Online Medical Store",
	description:
		"MedZ is a comprehensive e-commerce platform providing a seamless online shopping experience for medical products, including prescription medications, health supplements, and medical devices. Enjoy a user-friendly interface, secure checkout, and personalized features for a superior shopping experience.",
	keywords:
		"medicine, pharmacy, online pharmacy, prescription drugs, health products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextUIProvider>
					<Navbar />
					{children}
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
