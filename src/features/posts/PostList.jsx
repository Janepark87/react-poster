import styles from './styles/PostList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';
import EmptyPost from './EmptyPost';
import { getPosts, createPost } from '../../services/apiPosts';
import Spinner from '../../components/Spinner';

export default function PostList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			const data = await getPosts();
			setPosts(data);
			setIsLoading(false);
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

			{isLoading && <Spinner />}

			{!isLoading && posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.author} author={post.author} body={post.body} />
					))}
				</ul>
			)}

			{!isLoading && posts.length < 0 && <EmptyPost />}
		</>
	);
}
