import React from 'react'
import './page.css'

interface User {
	id: number
	name: string
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } })
	const users: User[] = await res.json()
	return (
		<>
			<h1 className='font-bold text-3xl mb-2'>Users</h1>
			{/* <p className='font-bold text-3xl mb-2'>{new Date().toLocaleTimeString()}</p> */}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	)
}

export default UsersPage
