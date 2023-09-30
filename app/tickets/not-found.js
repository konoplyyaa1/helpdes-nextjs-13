import Link from 'next/link'

export default function NotFound() {
	return (
		<main>
			<div className='text-center space-y-2'>
				<h2 className='text-3xl'>Not Found</h2>
				<p>Sorry, we could not find what you were looking for.</p>
				<p>
					Go back to <Link href='/tickets'>Tickets</Link>
				</p>
			</div>
		</main>
	)
}
