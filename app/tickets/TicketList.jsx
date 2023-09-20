async function getTickets() {
	try {
		const response = await fetch('http://localhost:5000/tickets', {
			next: {
				revalidate: 0,
			},
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

export default async function ticketList() {
	const tickets = await getTickets()

	return (
		<>
			{tickets.map(ticket => (
				<div className='card my-5' key={ticket.id}>
					<h3>{ticket.title}</h3>
					<p>{ticket.body}</p>
					<div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
				</div>
			))}
			{tickets.length === 0 && (
				<div className='text-center'>No tickets found</div>
			)}
		</>
	)
}