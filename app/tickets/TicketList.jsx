import getTickets from '../utils/getTickets'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ticketList() {
	const tickets = await getTickets()

	if (!tickets) notFound()

	return (
		<>
			{tickets.map(ticket => (
				<div className='card my-5' key={ticket.id}>
					<h3>
						<Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
					</h3>
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
