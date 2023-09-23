import getTicket from '../../utils/getTicket'

export default async function page({ params }) {
	const post = await getTicket(params.id)

	return (
		<main>
			<div className='card'>
				<h1>{post.title}</h1>
				<p className='opacity-60'>Create by: {post.user_email}</p>
				<p>{post.body}</p>
				<div className={`pill ${post.priority}`}>{post.priority}</div>
			</div>
		</main>
	)
}
