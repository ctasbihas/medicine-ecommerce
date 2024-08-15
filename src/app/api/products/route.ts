import medicines from "@/../public/data/medicines.json";

export async function GET() {
	return Response.json(medicines);
}
