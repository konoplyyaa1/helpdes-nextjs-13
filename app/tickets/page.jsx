import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

const page = () => {
	return (
		<main>
			tickets page
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	)
}

export default page
