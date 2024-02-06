import styles from './styles/PostList.module.css';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import EmptyPost from './EmptyPost';

export default function PostList() {
	const posts = useLoaderData();

	return (
		<>
			{posts.length > 0 ? (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</ul>
			) : (
				<EmptyPost />
			)}
		</>
	);
}
