import styles from './styles/PostList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from '../../components/Modal';
import { useState } from 'react';
import EmptyPost from './EmptyPost';

export default function PostList({ isPosting, onStopPosting }) {
	const [posts, setPost] = useState([]);

	const addPostHandler = (newPost) => {
		if (!newPost) return;
		setPost((exsitingPosts) => [newPost, ...exsitingPosts]);
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
