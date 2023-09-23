export default async function getTicket(id) {
	try {
		const response = await fetch(`http://localhost:3001/tickets/${id}`, {
			next: { revalidate: 0 },
		})

		if (!response.ok) {
			throw new Error(`Error fetching tickets: ${response.status}`)
		}

		return response.json()
	} catch (error) {
		console.error(error)
		return []
	}
}
