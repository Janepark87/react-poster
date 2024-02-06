import { useLoaderData, Link } from 'react-router-dom';
import styles from './styles/PostDetails.module.css';
import { getPost } from '../../services/apiPosts';
import Modal from '../../components/Modal';

export default function PostDetails() {
	const post = useLoaderData();

	if (!post) {
		return (
			<Modal size="md">
				<div className={styles.details}>
					<h2>Could not find post</h2>
					<p>Unfortunately, the requested post could not be found.</p>
					<Link to=".." className={styles.btn}>
						Okay
					</Link>
				</div>
			</Modal>
		);
	}
	return (
		<Modal size="lg">
			<div className={styles.details}>
				<span className={styles.author}>{post.author}</span>
				<p className={styles.text}>{post.body}</p>
			</div>
		</Modal>
	);
}

export async function loader({ params }) {
	const post = await getPost(params.postId);
	return post;
}
