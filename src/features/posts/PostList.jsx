import { useState } from 'react';
import styles from './styles/PostList.module.css';
import NewPost from './NewPost';
import Post from './Post';
import Modal from '../../components/Modal';

export default function PostList({ isPosting, onStopPosting }) {
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost body={body} author={author} onBody={(e) => setBody(e.target.value)} onAuthor={(e) => setAuthor(e.target.value)} />
				</Modal>
			)}

			<ul className={styles.posts}>
				<Post author={author} body={body} />
			</ul>
		</>
	);
}
