import styles from './styles/PostList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';
import EmptyPost from './EmptyPost';
import { getPosts, createPost } from '../../services/apiPosts';

export default function PostList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const data = await getPosts();
			setPosts(data);
		};

		fetchPosts();
	}, []);

	const addPostHandler = async (newPost) => {
		await createPost(newPost);
		setPosts((exsitingPosts) => [newPost, ...exsitingPosts]);
	};

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}

			{posts.length > 0 ? (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.author} author={post.author} body={post.body} />
					))}
				</ul>
			) : (
				<EmptyPost />
			)}
		</>
	);
}
