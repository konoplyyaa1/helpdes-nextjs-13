'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [priority, setPriority] = useState('low')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const onFormSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)

		const ticket = {
			title,
			body,
			priority,
			user_email: 'test@email.com',
		}

		const res = await fetch('http://localhost:3001/tickets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ticket),
		})

		if (res.status === 201) {
			router.refresh()
			router.push('/tickets')
		}
	}

	return (
		<form onSubmit={onFormSubmit} className='w-1/2'>
			<label>
				<span>Title</span>
				<input
					type='text'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</label>

			<label>
				<span>Body</span>
				<input
					type='text'
					value={body}
					onChange={e => setBody(e.target.value)}
				/>
			</label>

			<label>
				<span>Priority</span>
				<select value={priority} onChange={e => setPriority(e.target.value)}>
					<option value='low'>Low</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>
			</label>

			<button type='submit' className='btn-primary'>
				{isLoading ? 'Adding...' : 'Add new Ticket'}
			</button>
		</form>
	)
}
