import { Outlet, useNavigation } from 'react-router-dom';
import { getPosts } from '../services/apiPosts';
import PostList from '../features/posts/PostList';
import Spinner from '../components/Spinner';

export default function Posts() {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';

	return (
		<>
			<main>{isLoading ? <Spinner /> : <PostList />}</main>

			{/* Modal */}
			<Outlet />
		</>
	);
}

export async function loader() {
	const posts = await getPosts();
	return posts;
}
