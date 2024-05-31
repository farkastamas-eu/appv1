import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
	return (
		<main>
			<div className='text-2xl'>Hello World</div>
			<Link
				href='/users'
				className='hover:font-bold'>
				UsersPage
			</Link>
			<ProductCard />
		</main>
	)
}
